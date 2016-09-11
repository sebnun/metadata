program tarea1;

var
    n, m, i, j, numDivisores    : integer;

begin

    (* ingresar datos *) 
    readln(n);
    readln(m);
    
    if (1 < n) and (n <= m) then (* ver si 1 < n <= m *)
    begin

         for i := n to m do (* por cada entero en el rango *)
         begin
            
            numDivisores := 0;
            write(i, ':'); 

            (* divisores triviales son 1 e i, no los uso
            maximo divisor posible no trivial es i / 2 *)
            for j := 2 to (i div 2) do 
            begin

                if (i mod j) = 0 then (* j es divisor de i *)
                begin

                    write(' ', j);
                    numDivisores := numDivisores + 1;

                    if numDivisores = 6 then (* pide 6 divisores *)
                        break;

                end;

            end;

            if numDivisores = 0 then (* no tiene divisores no triviales *)
                write(' es primo');

            writeLn;

         end;

    end;

end.