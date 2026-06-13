# `zeroTrustDeviceSettings` Submodule <a name="`zeroTrustDeviceSettings` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceSettings <a name="ZeroTrustDeviceSettings" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceSettings(Construct Scope, string Id, ZeroTrustDeviceSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig">ZeroTrustDeviceSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig">ZeroTrustDeviceSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime">ResetDisableForTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalEnabled">ResetExternalEmergencySignalEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalFingerprint">ResetExternalEmergencySignalFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalInterval">ResetExternalEmergencySignalInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalUrl">ResetExternalEmergencySignalUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled">ResetGatewayProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled">ResetGatewayUdpProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled">ResetRootCertificateInstallationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp">ResetUseZtVirtualIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDisableForTime` <a name="ResetDisableForTime" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime"></a>

```csharp
private void ResetDisableForTime()
```

##### `ResetExternalEmergencySignalEnabled` <a name="ResetExternalEmergencySignalEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalEnabled"></a>

```csharp
private void ResetExternalEmergencySignalEnabled()
```

##### `ResetExternalEmergencySignalFingerprint` <a name="ResetExternalEmergencySignalFingerprint" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalFingerprint"></a>

```csharp
private void ResetExternalEmergencySignalFingerprint()
```

##### `ResetExternalEmergencySignalInterval` <a name="ResetExternalEmergencySignalInterval" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalInterval"></a>

```csharp
private void ResetExternalEmergencySignalInterval()
```

##### `ResetExternalEmergencySignalUrl` <a name="ResetExternalEmergencySignalUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetExternalEmergencySignalUrl"></a>

```csharp
private void ResetExternalEmergencySignalUrl()
```

##### `ResetGatewayProxyEnabled` <a name="ResetGatewayProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled"></a>

```csharp
private void ResetGatewayProxyEnabled()
```

##### `ResetGatewayUdpProxyEnabled` <a name="ResetGatewayUdpProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled"></a>

```csharp
private void ResetGatewayUdpProxyEnabled()
```

##### `ResetRootCertificateInstallationEnabled` <a name="ResetRootCertificateInstallationEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled"></a>

```csharp
private void ResetRootCertificateInstallationEnabled()
```

##### `ResetUseZtVirtualIp` <a name="ResetUseZtVirtualIp" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp"></a>

```csharp
private void ResetUseZtVirtualIp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDeviceSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceSettings.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustDeviceSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput">DisableForTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalEnabledInput">ExternalEmergencySignalEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalFingerprintInput">ExternalEmergencySignalFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalIntervalInput">ExternalEmergencySignalIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalUrlInput">ExternalEmergencySignalUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput">GatewayProxyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput">GatewayUdpProxyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput">RootCertificateInstallationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput">UseZtVirtualIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime">DisableForTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalEnabled">ExternalEmergencySignalEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalFingerprint">ExternalEmergencySignalFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalInterval">ExternalEmergencySignalInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalUrl">ExternalEmergencySignalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled">GatewayProxyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled">GatewayUdpProxyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled">RootCertificateInstallationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp">UseZtVirtualIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DisableForTimeInput`<sup>Optional</sup> <a name="DisableForTimeInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput"></a>

```csharp
public double DisableForTimeInput { get; }
```

- *Type:* double

---

##### `ExternalEmergencySignalEnabledInput`<sup>Optional</sup> <a name="ExternalEmergencySignalEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalEnabledInput"></a>

```csharp
public bool|IResolvable ExternalEmergencySignalEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEmergencySignalFingerprintInput`<sup>Optional</sup> <a name="ExternalEmergencySignalFingerprintInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalFingerprintInput"></a>

```csharp
public string ExternalEmergencySignalFingerprintInput { get; }
```

- *Type:* string

---

##### `ExternalEmergencySignalIntervalInput`<sup>Optional</sup> <a name="ExternalEmergencySignalIntervalInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalIntervalInput"></a>

```csharp
public string ExternalEmergencySignalIntervalInput { get; }
```

- *Type:* string

---

##### `ExternalEmergencySignalUrlInput`<sup>Optional</sup> <a name="ExternalEmergencySignalUrlInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalUrlInput"></a>

```csharp
public string ExternalEmergencySignalUrlInput { get; }
```

- *Type:* string

---

##### `GatewayProxyEnabledInput`<sup>Optional</sup> <a name="GatewayProxyEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput"></a>

```csharp
public bool|IResolvable GatewayProxyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayUdpProxyEnabledInput`<sup>Optional</sup> <a name="GatewayUdpProxyEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput"></a>

```csharp
public bool|IResolvable GatewayUdpProxyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RootCertificateInstallationEnabledInput`<sup>Optional</sup> <a name="RootCertificateInstallationEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput"></a>

```csharp
public bool|IResolvable RootCertificateInstallationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseZtVirtualIpInput`<sup>Optional</sup> <a name="UseZtVirtualIpInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput"></a>

```csharp
public bool|IResolvable UseZtVirtualIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime"></a>

```csharp
public double DisableForTime { get; }
```

- *Type:* double

---

##### `ExternalEmergencySignalEnabled`<sup>Required</sup> <a name="ExternalEmergencySignalEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalEnabled"></a>

```csharp
public bool|IResolvable ExternalEmergencySignalEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEmergencySignalFingerprint`<sup>Required</sup> <a name="ExternalEmergencySignalFingerprint" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalFingerprint"></a>

```csharp
public string ExternalEmergencySignalFingerprint { get; }
```

- *Type:* string

---

##### `ExternalEmergencySignalInterval`<sup>Required</sup> <a name="ExternalEmergencySignalInterval" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalInterval"></a>

```csharp
public string ExternalEmergencySignalInterval { get; }
```

- *Type:* string

---

##### `ExternalEmergencySignalUrl`<sup>Required</sup> <a name="ExternalEmergencySignalUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.externalEmergencySignalUrl"></a>

```csharp
public string ExternalEmergencySignalUrl { get; }
```

- *Type:* string

---

##### `GatewayProxyEnabled`<sup>Required</sup> <a name="GatewayProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled"></a>

```csharp
public bool|IResolvable GatewayProxyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayUdpProxyEnabled`<sup>Required</sup> <a name="GatewayUdpProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled"></a>

```csharp
public bool|IResolvable GatewayUdpProxyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RootCertificateInstallationEnabled`<sup>Required</sup> <a name="RootCertificateInstallationEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled"></a>

```csharp
public bool|IResolvable RootCertificateInstallationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseZtVirtualIp`<sup>Required</sup> <a name="UseZtVirtualIp" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp"></a>

```csharp
public bool|IResolvable UseZtVirtualIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceSettingsConfig <a name="ZeroTrustDeviceSettingsConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    double DisableForTime = null,
    bool|IResolvable ExternalEmergencySignalEnabled = null,
    string ExternalEmergencySignalFingerprint = null,
    string ExternalEmergencySignalInterval = null,
    string ExternalEmergencySignalUrl = null,
    bool|IResolvable GatewayProxyEnabled = null,
    bool|IResolvable GatewayUdpProxyEnabled = null,
    bool|IResolvable RootCertificateInstallationEnabled = null,
    bool|IResolvable UseZtVirtualIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime">DisableForTime</a></code> | <code>double</code> | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalEnabled">ExternalEmergencySignalEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls whether the external emergency disconnect feature is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalFingerprint">ExternalEmergencySignalFingerprint</a></code> | <code>string</code> | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalInterval">ExternalEmergencySignalInterval</a></code> | <code>string</code> | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalUrl">ExternalEmergencySignalUrl</a></code> | <code>string</code> | The HTTPS URL from which to fetch the emergency disconnect signal. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled">GatewayProxyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable gateway proxy filtering on TCP. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled">GatewayUdpProxyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable gateway proxy filtering on UDP. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled">RootCertificateInstallationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable installation of cloudflare managed root certificate. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp">UseZtVirtualIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable using CGNAT virtual IPv4. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}.

---

##### `DisableForTime`<sup>Optional</sup> <a name="DisableForTime" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime"></a>

```csharp
public double DisableForTime { get; set; }
```

- *Type:* double

Sets the time limit, in seconds, that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}

---

##### `ExternalEmergencySignalEnabled`<sup>Optional</sup> <a name="ExternalEmergencySignalEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalEnabled"></a>

```csharp
public bool|IResolvable ExternalEmergencySignalEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls whether the external emergency disconnect feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#external_emergency_signal_enabled ZeroTrustDeviceSettings#external_emergency_signal_enabled}

---

##### `ExternalEmergencySignalFingerprint`<sup>Optional</sup> <a name="ExternalEmergencySignalFingerprint" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalFingerprint"></a>

```csharp
public string ExternalEmergencySignalFingerprint { get; set; }
```

- *Type:* string

The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url.

If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#external_emergency_signal_fingerprint ZeroTrustDeviceSettings#external_emergency_signal_fingerprint}

---

##### `ExternalEmergencySignalInterval`<sup>Optional</sup> <a name="ExternalEmergencySignalInterval" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalInterval"></a>

```csharp
public string ExternalEmergencySignalInterval { get; set; }
```

- *Type:* string

The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#external_emergency_signal_interval ZeroTrustDeviceSettings#external_emergency_signal_interval}

---

##### `ExternalEmergencySignalUrl`<sup>Optional</sup> <a name="ExternalEmergencySignalUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.externalEmergencySignalUrl"></a>

```csharp
public string ExternalEmergencySignalUrl { get; set; }
```

- *Type:* string

The HTTPS URL from which to fetch the emergency disconnect signal.

Must use HTTPS and have an IPv4 or IPv6 address as the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#external_emergency_signal_url ZeroTrustDeviceSettings#external_emergency_signal_url}

---

##### `GatewayProxyEnabled`<sup>Optional</sup> <a name="GatewayProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled"></a>

```csharp
public bool|IResolvable GatewayProxyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable gateway proxy filtering on TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}

---

##### `GatewayUdpProxyEnabled`<sup>Optional</sup> <a name="GatewayUdpProxyEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled"></a>

```csharp
public bool|IResolvable GatewayUdpProxyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable gateway proxy filtering on UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}

---

##### `RootCertificateInstallationEnabled`<sup>Optional</sup> <a name="RootCertificateInstallationEnabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled"></a>

```csharp
public bool|IResolvable RootCertificateInstallationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable installation of cloudflare managed root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}

---

##### `UseZtVirtualIp`<sup>Optional</sup> <a name="UseZtVirtualIp" id="@cdktn/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp"></a>

```csharp
public bool|IResolvable UseZtVirtualIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable using CGNAT virtual IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}

---



