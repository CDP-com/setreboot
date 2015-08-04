var timeout	 = 500;
var closetimer	 = 0;
var ddmenuitem	 = 0;

function cursor_wait() {
	document.body.style.cursor = 'wait';
}

function cursor_clear() {
	document.body.style.cursor = 'default';
}

function ta_init()
{
    // onload img - check4updates happens on image onload function which happens before this
    // so web page logic is already happened.
    //
    var isLocal = 1;
    var isVista = 0;
    var isXP = 0;

    var url = location.href;
    if( url.indexOf( 'http' ) != - 1 )
    {
        isLocal = 0;
    }
    var ua = navigator.userAgent.toLowerCase();
    if ( ua.indexOf( 'windows nt 5.1' ) != - 1 )
    {
        isXP = 1;
    }
    if ( ua.indexOf( 'windows nt 6.0' ) != - 1 )
    {
        isVista = 1;
    }
    if ( ua.indexOf( 'windows nt 6.1' ) != - 1 )
    {
        isVista = 1;
        // Windows 7
    }
    if ( ua.indexOf( 'windows nt 6.2' ) != - 1 )
    {
        isVista = 1;
        // Windows 8
    }

    // conditional logic goes here... for demo page

}

function runApp()
{
    var windowlocation = window.location.href;
    if ( windowlocation.indexOf( "http" ) > -1 )
    {
        //demoResults();
    }
    else
    {
        //document.location.href = "run.html";
        togglereboot();
    }
}


function openremote( uri )
{
   var myCmd = "openremote," + uri;
   var url = location.href;
   var isLocal = 1;
   if( url.indexOf( 'http' ) != - 1 )
   {
      isLocal = 0;
   }

   if ( isLocal )
   {
      output = doCommand2( myCmd );
      output = output.toUpperCase();
      if( output.substring( 0, 6 ) == "2,OK,{" )
      {
         // window.location.replace( 'results.html' );
         // Stay on page instead of showing results page.
      }
      else if( output.substring( 0, 6 ) == "2,PIPE" )
      {
         window.location.replace( 'pipedown.html' );
      }
      else if( output.substring( 0, 6 ) == "6,UPDA" )
      {
         window.location.replace( 'updating.html' );
      }
      else if( output.substring( 0, 6 ) == "3,OK,{" )
      {
         // window.location.replace( 'results.html' );
      }
      else if( output.substring( 0, 6 ) == "4,OK,{" )
      {
         // location.href = "results.html";
      }
      else if( output.substring( 0, 6 ) == "2,DENY" )
      {
         window.location.replace( 'deny.html' );
      }
      else
      {
         // alert( output.substring( 0, 6 ) );
         location.href = "unknown.html";
      }
   }
}

function togglereboot()
{
	cursor_wait();
    var url = location.href;
    var isLocal = 1;
    if( url.indexOf( 'http' ) != - 1 )
    {
        isLocal = 0;
    }

    if ( isLocal )
    {
      output = doCommand2( "togglereboot" );
      output = output.toUpperCase();
      if( output.substring( 0, 6 ) == "2,OK,{" )
      {
         //window.location.replace( 'results.html' );
         //Stay on page instead of showing results page.
      }
      else if( output.substring( 0, 6 ) == "2,PIPE" )
      {
         window.location.replace( 'pipedown.html' );
      }
      else if( output.substring( 0, 6 ) == "6,UPDA" )
      {
         window.location.replace( 'updating.html' );
      }
      else if( output.substring( 0, 6 ) == "3,OK,{" )
      {
         //window.location.replace( 'results.html' );
      }
      else if( output.substring( 0, 6 ) == "4,OK,{" )
      {
         //location.href = "results.html";
      }
      else if( output.substring( 0, 6 ) == "2,DENY" )
      {
         window.location.replace( 'deny.html' );
      }
      else
      {
         // alert( output.substring( 0, 6 ) );
         location.href = "unknown.html";
      }
      cursor_clear();
    }
}
