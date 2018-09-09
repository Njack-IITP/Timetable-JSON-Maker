var val=-1;var prev_val=-1;
        $('#menu1 button').click(function(){
            val=$(this).attr("value");
            if(prev_val!=val)
            {
                select_year(val);
                select_branch(val);
            }
            prev_val=val;
        })

        function select_year(val)
        {
            $('#menu2').empty();
            if(val==1)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="1">1st year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="2">2nd year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="3">3rd year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="4">4th year</button>');
            $('#menu2').append($r);
            }
            if(val==2)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="1">1st year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="2">2nd year</button>');
            $('#menu2').append($r);
            }
            if(val==3)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="1">1st year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="2">2nd year</button>');
            $('#menu2').append($r);
            }
            if(val==4)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="1">1st year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="2">2nd year</button>');
            $('#menu2').append($r);
            $r=$('<button class="dropdown-item" value="3">3rd year</button>');
            $('#menu2').append($r);
            }
        }

        function select_branch(val)
        {
            $('#menu3').empty();
            if(val==1)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="cs">CS</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="ee">EE</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="me">ME</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="ce">CE</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="cb">CB</button>');
            $('#menu3').append($r);
            }
            if(val==2)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="mech">Mechatronics</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="mnc">Mathematics & Computing</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="nano">Nano Science & Technology</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="cse">Computer Science & Engineering</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="comm">Communication System Engineering</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="me">Mechanical Engineering</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="ce">Civil & Infrastructure Engineering</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="mse">Materials Science & Engineering</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="vlsi">VLSI & Embedded Systems</button>');
            $('#menu3').append($r);
            }
            if(val==3)
            { 
            var $r;
            $r=$('<button class="dropdown-item" value="math">Mathematics</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="phy">Physics</button>');
            $('#menu3').append($r);
            $r=$('<button class="dropdown-item" value="chem">Chemistry</button>');
            $('#menu3').append($r);
            }
            if(val==4)
            { 
            }
        }