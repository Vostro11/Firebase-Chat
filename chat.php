<?php session_start();
if(!$_SESSION['id']){
    header("Location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Social Aves</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="main.css" rel="stylesheet">
    
    <script src="https://www.gstatic.com/firebasejs/3.6.9/firebase.js"></script>
   <script type="text/javascript" src="main.js"></script>
</head>
<body>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<script src="http://91.234.35.26/iwiki-admin/v1.0.0/admin/js/jquery.nicescroll.min.js"></script>
<div class="container">
<div class="row">
        <div class="col-sm-12">
            <div class="panel panel-white border-top-green">
                <div class="panel-body chat"> 
                    <div class="row chat-wrapper">  
                        <div class="col-md-4">
                            <div class="compose-area"> 
                            
                                <a href="javascript:void(0);" class="btn btn-default"><i class="fa fa-edit"></i> Users</a>
                            </div>
                            
                            <div>
                                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 550px;">
                                <div class="chat-list-wrapper" style="overflow-y: auto; width: auto; height: 550px;">
                                    <ul class="chat-list">
                                    </ul>
                                </div><div class="slimScrollBar" style="width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 478.639px; background: rgb(0, 0, 0);"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div></div>
                            </div>
                            
                        </div>
                        
                        <div class="col-md-8">

                            <div class="recipient-box"> 
                                <select data-placeholder=" " class="form-control chzn-select chzn-done" multiple="" style="display: none;"> 
                                    <option value="k.mckoy@ztapps.com">Kevin Mckoy</option>
                                    <option value="y.robinson@ztapps.com" selected="">Yanique Robinson</option>
                                    <option value="gavino@ztapps.com">Gavino Free</option> 
                                    <option value="ggeoff@ztapps.com">Geoff Ramsey</option>
                                    <option value="kkara@ztapps.com">Kara Kingsley</option>
                                    <option value="barbs@ztapps.com">Barbara Dundkleman</option> 
                                </select>
                            </div>
                            
                            <div>

                                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 452px;">
                                <a href="javascript:void(0);" id="user-name" style="position: fixed;z-index: 999999; color: red;">Select User</a>
                                <div class="message-list-wrapper" style="overflow: scroll; width: auto; height: 452px;">
                                    <ul class="message-list">
                                        <li class="">
                                            
                                            <hr>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/chat-6f4f2.appspot.com/o/placeholder%2Fapp%2Fic_icon.png?alt=media&token=47089989-ae5b-4e58-adda-76899477f46b">
                                        </li>
                                    </ul>
                                </div>
                                <div class="slimScrollBar" style="width: 7px; position: absolute; top: 265px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 187.092px; background: rgb(0, 0, 0);"></div>
                                <div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; opacity: 0.2; z-index: 90; right: 1px; background: rgb(51, 51, 51);"></div>
                                </div>

                                <div class="compose-box">
                                    <div class="row">
                                       <div class="col-xs-12 mg-btm-10">
                                           <textarea id="message" class="form-control input-sm" placeholder="Type your message here..."></textarea>
                                        </div>
                                        <div class="col-xs-8">
                                           
                                        </div>
                                        <div class="col-xs-4"> 
                                            <button class="btn btn-green btn-sm pull-right"  onclick="myfunction()" >
                                                <i class="fa fa-location-arrow"></i> Send
                                            </button>
                                        </div> 
                                    </div> 
                                </div>
                                
                            </div>
                            
                        </div>                                    
                    </div> 
                    
                </div> 
            </div>
        </div>

    </div>
</div>

<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

</script>
</body>
</html>