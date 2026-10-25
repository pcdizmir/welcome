/* Historical DOS-era Turbo C/BGI teaching comparison.
   Assumes a DOS mouse driver, a working BGI path, and a 640-pixel-wide mode.
   This code is not executed by the Slidev presentation. */
#include <graphics.h>
#include <conio.h>
#include <dos.h>

int main(void)
{
    int driver = DETECT, mode;
    union REGS in, out;
    int x, y, previousX, previousY;
    int drawing = 0;

    initgraph(&driver, &mode, "C:\\TURBOC3\\BGI");

    setbkcolor(WHITE);
    cleardevice();
    setcolor(RED);
    setlinestyle(SOLID_LINE, 0, THICK_WIDTH);

    /* Check whether a DOS mouse driver is available. */
    in.x.ax = 0;
    int86(0x33, &in, &out);

    if (out.x.ax == 0) {
        closegraph();
        return 1;
    }

    while (!kbhit())
    {
        /* Read mouse buttons and coordinates. */
        in.x.ax = 3;
        int86(0x33, &in, &out);

        x = out.x.cx;
        y = out.x.dx;

        if (out.x.bx & 1)
        {
            if (drawing)
                line(previousX, previousY, x, y);

            previousX = x;
            previousY = y;
            drawing = 1;
        }
        else
        {
            drawing = 0;
        }

        delay(10);
    }

    getch();
    closegraph();
    return 0;
}
