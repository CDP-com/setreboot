'togglesetreboot.vbs
Option Explicit
On Error Resume Next

Dim objShell, strRoot, strModify, strDelete, strComputer, dwValue, oReg, strKeyPath, strValueName, answer, objWMIService, colOperatingSystems, objOperatingSystem

strRoot = "HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\WindowsUpdate\AU\NoAutoRebootWithLoggedOnUsers"
' Create the Shell object
Set objShell = CreateObject("WScript.Shell")

Const HKEY_CURRENT_USER = &H80000001
Const HKEY_LOCAL_MACHINE = &H80000002

strComputer = "."

Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & _
    strComputer & "\root\default:StdRegProv")

strKeyPath = "Software\Microsoft\Windows\WindowsUpdate\AU"
strValueName = "NoAutoRebootWithLoggedOnUsers"

oReg.GetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue

If dwValue = "1" Then
enableUpdates()
Else
disableUpdates()
End If

If dwValue = "1" Then
   objShell.Popup "Setting changed!" & vbCrLf & vbCrLf & "Automatic Reboots after an update are now SUPPRESSED.", 10, "Reboot After Update", 4096
Else
   objShell.Popup "Setting changed!" & vbCrLf & vbCrLf & "Automatic Reboots are now ALLOWED after an update.", 10, "Reboot After Update", 4096
End If

WScript.Quit

'****************************************************
Function enableUpdates()
strModify = objShell.RegWrite(strRoot,"00000000", "REG_DWORD")
strModify = Null

Const HKEY_CURRENT_USER = &H80000001
Const HKEY_LOCAL_MACHINE = &H80000002

strComputer = "."
 
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & _
    strComputer & "\root\default:StdRegProv")
 
strKeyPath = "Software\Microsoft\Windows\WindowsUpdate\AU"
strValueName = "NoAutoRebootWithLoggedOnUsers"
oReg.GetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue

If dwValue = "0" Then
   'objShell.Popup "Reboot after Updates has been set to allow automatic reboot after an update." & vbCRLF, 10, "Allow reboots after updates... Toggle Automatic Reboot After Updates", 4096
Else
   objShell.Popup "The operation failed!" & vbCrLf & vbCrLf & "Please try again!", 10, "Reboot After Update", 4096
End If
End Function

Function disableUpdates()
strModify = objShell.RegWrite(strRoot,"00000001", "REG_DWORD")
strModify = Null

Const HKEY_CURRENT_USER = &H80000001
Const HKEY_LOCAL_MACHINE = &H80000002

strComputer = "."
 
Set oReg=GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & _
    strComputer & "\root\default:StdRegProv")
 
strKeyPath = "Software\Microsoft\Windows\WindowsUpdate\AU"
strValueName = "NoAutoRebootWithLoggedOnUsers"
oReg.GetDWORDValue HKEY_LOCAL_MACHINE,strKeyPath,strValueName,dwValue
If dwValue = "1" Then
   'objShell.Popup "Reboot after Updates has been set to suppress automatic reboot after an update." & vbCRLF, 10, "Turn off / suppress automatic reboots... Toggle Automatic Reboot After Updates", 4096
Else
   objShell.Popup "The operation failed!" & vbCrLf & vbCrLf & "Please try again!", 10, "Reboot After Update", 4096
End If
End Function


