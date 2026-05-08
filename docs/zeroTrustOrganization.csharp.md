# `zeroTrustOrganization` Submodule <a name="`zeroTrustOrganization` Submodule" id="@cdktn/provider-cloudflare.zeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganization <a name="ZeroTrustOrganization" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganization(Construct Scope, string Id, ZeroTrustOrganizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages">PutCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign">PutLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig">PutMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements">PutMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp">ResetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain">ResetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests">ResetDenyUnmatchedRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames">ResetDenyUnmatchedRequestsExemptedZoneNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly">ResetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign">ResetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfig">ResetMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfigurationAllowed">ResetMfaConfigurationAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaRequiredForAllApps">ResetMfaRequiredForAllApps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaSshPivKeyRequirements">ResetMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason">ResetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime">ResetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration">ResetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPages` <a name="PutCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages"></a>

```csharp
private void PutCustomPages(ZeroTrustOrganizationCustomPages Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `PutLoginDesign` <a name="PutLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign"></a>

```csharp
private void PutLoginDesign(ZeroTrustOrganizationLoginDesign Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `PutMfaConfig` <a name="PutMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig"></a>

```csharp
private void PutMfaConfig(ZeroTrustOrganizationMfaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---

##### `PutMfaSshPivKeyRequirements` <a name="PutMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements"></a>

```csharp
private void PutMfaSshPivKeyRequirements(ZeroTrustOrganizationMfaSshPivKeyRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putMfaSshPivKeyRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp"></a>

```csharp
private void ResetAllowAuthenticateViaWarp()
```

##### `ResetAuthDomain` <a name="ResetAuthDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain"></a>

```csharp
private void ResetAuthDomain()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity"></a>

```csharp
private void ResetAutoRedirectToIdentity()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages"></a>

```csharp
private void ResetCustomPages()
```

##### `ResetDenyUnmatchedRequests` <a name="ResetDenyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequests"></a>

```csharp
private void ResetDenyUnmatchedRequests()
```

##### `ResetDenyUnmatchedRequestsExemptedZoneNames` <a name="ResetDenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetDenyUnmatchedRequestsExemptedZoneNames"></a>

```csharp
private void ResetDenyUnmatchedRequestsExemptedZoneNames()
```

##### `ResetIsUiReadOnly` <a name="ResetIsUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly"></a>

```csharp
private void ResetIsUiReadOnly()
```

##### `ResetLoginDesign` <a name="ResetLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign"></a>

```csharp
private void ResetLoginDesign()
```

##### `ResetMfaConfig` <a name="ResetMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfig"></a>

```csharp
private void ResetMfaConfig()
```

##### `ResetMfaConfigurationAllowed` <a name="ResetMfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaConfigurationAllowed"></a>

```csharp
private void ResetMfaConfigurationAllowed()
```

##### `ResetMfaRequiredForAllApps` <a name="ResetMfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaRequiredForAllApps"></a>

```csharp
private void ResetMfaRequiredForAllApps()
```

##### `ResetMfaSshPivKeyRequirements` <a name="ResetMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetMfaSshPivKeyRequirements"></a>

```csharp
private void ResetMfaSshPivKeyRequirements()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetUiReadOnlyToggleReason` <a name="ResetUiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason"></a>

```csharp
private void ResetUiReadOnlyToggleReason()
```

##### `ResetUserSeatExpirationInactiveTime` <a name="ResetUserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime"></a>

```csharp
private void ResetUserSeatExpirationInactiveTime()
```

##### `ResetWarpAuthSessionDuration` <a name="ResetWarpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration"></a>

```csharp
private void ResetWarpAuthSessionDuration()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages">CustomPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfig">MfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference">ZeroTrustOrganizationMfaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirements">MfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput">AuthDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput">CustomPagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput">DenyUnmatchedRequestsExemptedZoneNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput">DenyUnmatchedRequestsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput">IsUiReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput">LoginDesignInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigInput">MfaConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowedInput">MfaConfigurationAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllAppsInput">MfaRequiredForAllAppsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirementsInput">MfaSshPivKeyRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput">UiReadOnlyToggleReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput">UserSeatExpirationInactiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput">WarpAuthSessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain">AuthDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests">DenyUnmatchedRequests</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames">DenyUnmatchedRequestsExemptedZoneNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowed">MfaConfigurationAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllApps">MfaRequiredForAllApps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages"></a>

```csharp
public ZeroTrustOrganizationCustomPagesOutputReference CustomPages { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `LoginDesign`<sup>Required</sup> <a name="LoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign"></a>

```csharp
public ZeroTrustOrganizationLoginDesignOutputReference LoginDesign { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `MfaConfig`<sup>Required</sup> <a name="MfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfig"></a>

```csharp
public ZeroTrustOrganizationMfaConfigOutputReference MfaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference">ZeroTrustOrganizationMfaConfigOutputReference</a>

---

##### `MfaSshPivKeyRequirements`<sup>Required</sup> <a name="MfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirements"></a>

```csharp
public ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference MfaSshPivKeyRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference">ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput"></a>

```csharp
public bool|IResolvable AllowAuthenticateViaWarpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthDomainInput`<sup>Optional</sup> <a name="AuthDomainInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput"></a>

```csharp
public string AuthDomainInput { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput"></a>

```csharp
public bool|IResolvable AutoRedirectToIdentityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput"></a>

```csharp
public IResolvable|ZeroTrustOrganizationCustomPages CustomPagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `DenyUnmatchedRequestsExemptedZoneNamesInput`<sup>Optional</sup> <a name="DenyUnmatchedRequestsExemptedZoneNamesInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNamesInput"></a>

```csharp
public string[] DenyUnmatchedRequestsExemptedZoneNamesInput { get; }
```

- *Type:* string[]

---

##### `DenyUnmatchedRequestsInput`<sup>Optional</sup> <a name="DenyUnmatchedRequestsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsInput"></a>

```csharp
public bool|IResolvable DenyUnmatchedRequestsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsUiReadOnlyInput`<sup>Optional</sup> <a name="IsUiReadOnlyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput"></a>

```csharp
public bool|IResolvable IsUiReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoginDesignInput`<sup>Optional</sup> <a name="LoginDesignInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput"></a>

```csharp
public IResolvable|ZeroTrustOrganizationLoginDesign LoginDesignInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `MfaConfigInput`<sup>Optional</sup> <a name="MfaConfigInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigInput"></a>

```csharp
public IResolvable|ZeroTrustOrganizationMfaConfig MfaConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---

##### `MfaConfigurationAllowedInput`<sup>Optional</sup> <a name="MfaConfigurationAllowedInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowedInput"></a>

```csharp
public bool|IResolvable MfaConfigurationAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MfaRequiredForAllAppsInput`<sup>Optional</sup> <a name="MfaRequiredForAllAppsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllAppsInput"></a>

```csharp
public bool|IResolvable MfaRequiredForAllAppsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MfaSshPivKeyRequirementsInput`<sup>Optional</sup> <a name="MfaSshPivKeyRequirementsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaSshPivKeyRequirementsInput"></a>

```csharp
public IResolvable|ZeroTrustOrganizationMfaSshPivKeyRequirements MfaSshPivKeyRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="UiReadOnlyToggleReasonInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput"></a>

```csharp
public string UiReadOnlyToggleReasonInput { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTimeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```csharp
public string UserSeatExpirationInactiveTimeInput { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDurationInput`<sup>Optional</sup> <a name="WarpAuthSessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput"></a>

```csharp
public string WarpAuthSessionDurationInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```csharp
public bool|IResolvable AllowAuthenticateViaWarp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain"></a>

```csharp
public string AuthDomain { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```csharp
public bool|IResolvable AutoRedirectToIdentity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DenyUnmatchedRequests`<sup>Required</sup> <a name="DenyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequests"></a>

```csharp
public bool|IResolvable DenyUnmatchedRequests { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DenyUnmatchedRequestsExemptedZoneNames`<sup>Required</sup> <a name="DenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```csharp
public string[] DenyUnmatchedRequestsExemptedZoneNames { get; }
```

- *Type:* string[]

---

##### `IsUiReadOnly`<sup>Required</sup> <a name="IsUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly"></a>

```csharp
public bool|IResolvable IsUiReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MfaConfigurationAllowed`<sup>Required</sup> <a name="MfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaConfigurationAllowed"></a>

```csharp
public bool|IResolvable MfaConfigurationAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MfaRequiredForAllApps`<sup>Required</sup> <a name="MfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.mfaRequiredForAllApps"></a>

```csharp
public bool|IResolvable MfaRequiredForAllApps { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReason`<sup>Required</sup> <a name="UiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTime`<sup>Required</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDuration`<sup>Required</sup> <a name="WarpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationConfig <a name="ZeroTrustOrganizationConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    bool|IResolvable AllowAuthenticateViaWarp = null,
    string AuthDomain = null,
    bool|IResolvable AutoRedirectToIdentity = null,
    ZeroTrustOrganizationCustomPages CustomPages = null,
    bool|IResolvable DenyUnmatchedRequests = null,
    string[] DenyUnmatchedRequestsExemptedZoneNames = null,
    bool|IResolvable IsUiReadOnly = null,
    ZeroTrustOrganizationLoginDesign LoginDesign = null,
    ZeroTrustOrganizationMfaConfig MfaConfig = null,
    bool|IResolvable MfaConfigurationAllowed = null,
    bool|IResolvable MfaRequiredForAllApps = null,
    ZeroTrustOrganizationMfaSshPivKeyRequirements MfaSshPivKeyRequirements = null,
    string Name = null,
    string SessionDuration = null,
    string UiReadOnlyToggleReason = null,
    string UserSeatExpirationInactiveTime = null,
    string WarpAuthSessionDuration = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain">AuthDomain</a></code> | <code>string</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages">CustomPages</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests">DenyUnmatchedRequests</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames">DenyUnmatchedRequestsExemptedZoneNames</a></code> | <code>string[]</code> | Contains zone names to exempt from the `deny_unmatched_requests` feature. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfig">MfaConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | Configures multi-factor authentication (MFA) settings for an organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfigurationAllowed">MfaConfigurationAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaRequiredForAllApps">MfaRequiredForAllApps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Determines whether global MFA settings apply to applications by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaSshPivKeyRequirements">MfaSshPivKeyRequirements</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | Configures SSH PIV key requirements for MFA using hardware security keys. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name">Name</a></code> | <code>string</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```csharp
public bool|IResolvable AllowAuthenticateViaWarp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `AuthDomain`<sup>Optional</sup> <a name="AuthDomain" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain"></a>

```csharp
public string AuthDomain { get; set; }
```

- *Type:* string

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity"></a>

```csharp
public bool|IResolvable AutoRedirectToIdentity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages"></a>

```csharp
public ZeroTrustOrganizationCustomPages CustomPages { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `DenyUnmatchedRequests`<sup>Optional</sup> <a name="DenyUnmatchedRequests" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequests"></a>

```csharp
public bool|IResolvable DenyUnmatchedRequests { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application.

If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the `deny_unmatched_requests_exempted_zone_names` array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#deny_unmatched_requests ZeroTrustOrganization#deny_unmatched_requests}

---

##### `DenyUnmatchedRequestsExemptedZoneNames`<sup>Optional</sup> <a name="DenyUnmatchedRequestsExemptedZoneNames" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.denyUnmatchedRequestsExemptedZoneNames"></a>

```csharp
public string[] DenyUnmatchedRequestsExemptedZoneNames { get; set; }
```

- *Type:* string[]

Contains zone names to exempt from the `deny_unmatched_requests` feature.

Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#deny_unmatched_requests_exempted_zone_names ZeroTrustOrganization#deny_unmatched_requests_exempted_zone_names}

---

##### `IsUiReadOnly`<sup>Optional</sup> <a name="IsUiReadOnly" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly"></a>

```csharp
public bool|IResolvable IsUiReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `LoginDesign`<sup>Optional</sup> <a name="LoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign"></a>

```csharp
public ZeroTrustOrganizationLoginDesign LoginDesign { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `MfaConfig`<sup>Optional</sup> <a name="MfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfig"></a>

```csharp
public ZeroTrustOrganizationMfaConfig MfaConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

Configures multi-factor authentication (MFA) settings for an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_config ZeroTrustOrganization#mfa_config}

---

##### `MfaConfigurationAllowed`<sup>Optional</sup> <a name="MfaConfigurationAllowed" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaConfigurationAllowed"></a>

```csharp
public bool|IResolvable MfaConfigurationAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if this organization can enforce multi-factor authentication (MFA) requirements at the application and policy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_configuration_allowed ZeroTrustOrganization#mfa_configuration_allowed}

---

##### `MfaRequiredForAllApps`<sup>Optional</sup> <a name="MfaRequiredForAllApps" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaRequiredForAllApps"></a>

```csharp
public bool|IResolvable MfaRequiredForAllApps { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Determines whether global MFA settings apply to applications by default.

The organization must have MFA enabled with at least one authentication method and a session duration configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_required_for_all_apps ZeroTrustOrganization#mfa_required_for_all_apps}

---

##### `MfaSshPivKeyRequirements`<sup>Optional</sup> <a name="MfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.mfaSshPivKeyRequirements"></a>

```csharp
public ZeroTrustOrganizationMfaSshPivKeyRequirements MfaSshPivKeyRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

Configures SSH PIV key requirements for MFA using hardware security keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#mfa_ssh_piv_key_requirements ZeroTrustOrganization#mfa_ssh_piv_key_requirements}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `UiReadOnlyToggleReason`<sup>Optional</sup> <a name="UiReadOnlyToggleReason" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; set; }
```

- *Type:* string

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `UserSeatExpirationInactiveTime`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; set; }
```

- *Type:* string

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `WarpAuthSessionDuration`<sup>Optional</sup> <a name="WarpAuthSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; set; }
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

### ZeroTrustOrganizationCustomPages <a name="ZeroTrustOrganizationCustomPages" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationCustomPages {
    string Forbidden = null,
    string IdentityDenied = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden">Forbidden</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access after failing a non-identity rule. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access. |

---

##### `Forbidden`<sup>Optional</sup> <a name="Forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden"></a>

```csharp
public string Forbidden { get; set; }
```

- *Type:* string

The uid of the custom page to use when a user is denied access after failing a non-identity rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}

---

##### `IdentityDenied`<sup>Optional</sup> <a name="IdentityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; set; }
```

- *Type:* string

The uid of the custom page to use when a user is denied access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}

---

### ZeroTrustOrganizationLoginDesign <a name="ZeroTrustOrganizationLoginDesign" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationLoginDesign {
    string BackgroundColor = null,
    string FooterText = null,
    string HeaderText = null,
    string LogoPath = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | The background color on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText">FooterText</a></code> | <code>string</code> | The text at the bottom of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText">HeaderText</a></code> | <code>string</code> | The text at the top of your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath">LogoPath</a></code> | <code>string</code> | The URL of the logo on your login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor">TextColor</a></code> | <code>string</code> | The text color on your login page. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

The background color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

The text at the bottom of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

The text at the top of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

The URL of the logo on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

The text color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}

---

### ZeroTrustOrganizationMfaConfig <a name="ZeroTrustOrganizationMfaConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationMfaConfig {
    string[] AllowedAuthenticators = null,
    string AmrMatchingSessionDuration = null,
    string RequiredAaguids = null,
    string SessionDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.allowedAuthenticators">AllowedAuthenticators</a></code> | <code>string[]</code> | Lists the MFA methods that users can authenticate with. `ssh_piv_key` is only relevant for infrastructure applications. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.amrMatchingSessionDuration">AmrMatchingSessionDuration</a></code> | <code>string</code> | Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.requiredAaguids">RequiredAaguids</a></code> | <code>string</code> | Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | Defines the duration of an MFA session. |

---

##### `AllowedAuthenticators`<sup>Optional</sup> <a name="AllowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.allowedAuthenticators"></a>

```csharp
public string[] AllowedAuthenticators { get; set; }
```

- *Type:* string[]

Lists the MFA methods that users can authenticate with. `ssh_piv_key` is only relevant for infrastructure applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#allowed_authenticators ZeroTrustOrganization#allowed_authenticators}

---

##### `AmrMatchingSessionDuration`<sup>Optional</sup> <a name="AmrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.amrMatchingSessionDuration"></a>

```csharp
public string AmrMatchingSessionDuration { get; set; }
```

- *Type:* string

Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authenticate contains "mfa".

Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#amr_matching_session_duration ZeroTrustOrganization#amr_matching_session_duration}

---

##### `RequiredAaguids`<sup>Optional</sup> <a name="RequiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.requiredAaguids"></a>

```csharp
public string RequiredAaguids { get; set; }
```

- *Type:* string

Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#required_aaguids ZeroTrustOrganization#required_aaguids}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

Defines the duration of an MFA session.

Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

### ZeroTrustOrganizationMfaSshPivKeyRequirements <a name="ZeroTrustOrganizationMfaSshPivKeyRequirements" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationMfaSshPivKeyRequirements {
    string PinPolicy = null,
    bool|IResolvable RequireFipsDevice = null,
    double[] SshKeySize = null,
    string[] SshKeyType = null,
    string TouchPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.pinPolicy">PinPolicy</a></code> | <code>string</code> | Defines when a PIN is required to use the SSH key. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.requireFipsDevice">RequireFipsDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeySize">SshKeySize</a></code> | <code>double[]</code> | Specifies the allowed SSH key sizes in bits. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeyType">SshKeyType</a></code> | <code>string[]</code> | Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.touchPolicy">TouchPolicy</a></code> | <code>string</code> | Defines when physical touch is required to use the SSH key. |

---

##### `PinPolicy`<sup>Optional</sup> <a name="PinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.pinPolicy"></a>

```csharp
public string PinPolicy { get; set; }
```

- *Type:* string

Defines when a PIN is required to use the SSH key.

Valid values: `never` (no PIN required), `once` (PIN required once per session), `always` (PIN required for each use).
Available values: "never", "once", "always".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#pin_policy ZeroTrustOrganization#pin_policy}

---

##### `RequireFipsDevice`<sup>Optional</sup> <a name="RequireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.requireFipsDevice"></a>

```csharp
public bool|IResolvable RequireFipsDevice { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Requires the SSH PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#require_fips_device ZeroTrustOrganization#require_fips_device}

---

##### `SshKeySize`<sup>Optional</sup> <a name="SshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeySize"></a>

```csharp
public double[] SshKeySize { get; set; }
```

- *Type:* double[]

Specifies the allowed SSH key sizes in bits.

Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ssh_key_size ZeroTrustOrganization#ssh_key_size}

---

##### `SshKeyType`<sup>Optional</sup> <a name="SshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.sshKeyType"></a>

```csharp
public string[] SshKeyType { get; set; }
```

- *Type:* string[]

Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#ssh_key_type ZeroTrustOrganization#ssh_key_type}

---

##### `TouchPolicy`<sup>Optional</sup> <a name="TouchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements.property.touchPolicy"></a>

```csharp
public string TouchPolicy { get; set; }
```

- *Type:* string

Defines when physical touch is required to use the SSH key.

Valid values: `never` (no touch required), `always` (touch required for each use), `cached` (touch cached for 15 seconds).
Available values: "never", "always", "cached".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/zero_trust_organization#touch_policy ZeroTrustOrganization#touch_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustOrganizationCustomPagesOutputReference <a name="ZeroTrustOrganizationCustomPagesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden">ResetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied">ResetIdentityDenied</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForbidden` <a name="ResetForbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden"></a>

```csharp
private void ResetForbidden()
```

##### `ResetIdentityDenied` <a name="ResetIdentityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```csharp
private void ResetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput">ForbiddenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput">IdentityDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">Forbidden</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForbiddenInput`<sup>Optional</sup> <a name="ForbiddenInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```csharp
public string ForbiddenInput { get; }
```

- *Type:* string

---

##### `IdentityDeniedInput`<sup>Optional</sup> <a name="IdentityDeniedInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```csharp
public string IdentityDeniedInput { get; }
```

- *Type:* string

---

##### `Forbidden`<sup>Required</sup> <a name="Forbidden" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```csharp
public string Forbidden { get; }
```

- *Type:* string

---

##### `IdentityDenied`<sup>Required</sup> <a name="IdentityDenied" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustOrganizationCustomPages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---


### ZeroTrustOrganizationLoginDesignOutputReference <a name="ZeroTrustOrganizationLoginDesignOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustOrganizationLoginDesign InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---


### ZeroTrustOrganizationMfaConfigOutputReference <a name="ZeroTrustOrganizationMfaConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationMfaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAllowedAuthenticators">ResetAllowedAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAmrMatchingSessionDuration">ResetAmrMatchingSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetRequiredAaguids">ResetRequiredAaguids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAuthenticators` <a name="ResetAllowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAllowedAuthenticators"></a>

```csharp
private void ResetAllowedAuthenticators()
```

##### `ResetAmrMatchingSessionDuration` <a name="ResetAmrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetAmrMatchingSessionDuration"></a>

```csharp
private void ResetAmrMatchingSessionDuration()
```

##### `ResetRequiredAaguids` <a name="ResetRequiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetRequiredAaguids"></a>

```csharp
private void ResetRequiredAaguids()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticatorsInput">AllowedAuthenticatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDurationInput">AmrMatchingSessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguidsInput">RequiredAaguidsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators">AllowedAuthenticators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration">AmrMatchingSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids">RequiredAaguids</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAuthenticatorsInput`<sup>Optional</sup> <a name="AllowedAuthenticatorsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticatorsInput"></a>

```csharp
public string[] AllowedAuthenticatorsInput { get; }
```

- *Type:* string[]

---

##### `AmrMatchingSessionDurationInput`<sup>Optional</sup> <a name="AmrMatchingSessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDurationInput"></a>

```csharp
public string AmrMatchingSessionDurationInput { get; }
```

- *Type:* string

---

##### `RequiredAaguidsInput`<sup>Optional</sup> <a name="RequiredAaguidsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguidsInput"></a>

```csharp
public string RequiredAaguidsInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `AllowedAuthenticators`<sup>Required</sup> <a name="AllowedAuthenticators" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.allowedAuthenticators"></a>

```csharp
public string[] AllowedAuthenticators { get; }
```

- *Type:* string[]

---

##### `AmrMatchingSessionDuration`<sup>Required</sup> <a name="AmrMatchingSessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.amrMatchingSessionDuration"></a>

```csharp
public string AmrMatchingSessionDuration { get; }
```

- *Type:* string

---

##### `RequiredAaguids`<sup>Required</sup> <a name="RequiredAaguids" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.requiredAaguids"></a>

```csharp
public string RequiredAaguids { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustOrganizationMfaConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaConfig">ZeroTrustOrganizationMfaConfig</a>

---


### ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference <a name="ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetPinPolicy">ResetPinPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetRequireFipsDevice">ResetRequireFipsDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeySize">ResetSshKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeyType">ResetSshKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetTouchPolicy">ResetTouchPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinPolicy` <a name="ResetPinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetPinPolicy"></a>

```csharp
private void ResetPinPolicy()
```

##### `ResetRequireFipsDevice` <a name="ResetRequireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetRequireFipsDevice"></a>

```csharp
private void ResetRequireFipsDevice()
```

##### `ResetSshKeySize` <a name="ResetSshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeySize"></a>

```csharp
private void ResetSshKeySize()
```

##### `ResetSshKeyType` <a name="ResetSshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetSshKeyType"></a>

```csharp
private void ResetSshKeyType()
```

##### `ResetTouchPolicy` <a name="ResetTouchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.resetTouchPolicy"></a>

```csharp
private void ResetTouchPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicyInput">PinPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDeviceInput">RequireFipsDeviceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySizeInput">SshKeySizeInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyTypeInput">SshKeyTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicyInput">TouchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy">PinPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice">RequireFipsDevice</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize">SshKeySize</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType">SshKeyType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy">TouchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PinPolicyInput`<sup>Optional</sup> <a name="PinPolicyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicyInput"></a>

```csharp
public string PinPolicyInput { get; }
```

- *Type:* string

---

##### `RequireFipsDeviceInput`<sup>Optional</sup> <a name="RequireFipsDeviceInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDeviceInput"></a>

```csharp
public bool|IResolvable RequireFipsDeviceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SshKeySizeInput`<sup>Optional</sup> <a name="SshKeySizeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySizeInput"></a>

```csharp
public double[] SshKeySizeInput { get; }
```

- *Type:* double[]

---

##### `SshKeyTypeInput`<sup>Optional</sup> <a name="SshKeyTypeInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyTypeInput"></a>

```csharp
public string[] SshKeyTypeInput { get; }
```

- *Type:* string[]

---

##### `TouchPolicyInput`<sup>Optional</sup> <a name="TouchPolicyInput" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicyInput"></a>

```csharp
public string TouchPolicyInput { get; }
```

- *Type:* string

---

##### `PinPolicy`<sup>Required</sup> <a name="PinPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.pinPolicy"></a>

```csharp
public string PinPolicy { get; }
```

- *Type:* string

---

##### `RequireFipsDevice`<sup>Required</sup> <a name="RequireFipsDevice" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.requireFipsDevice"></a>

```csharp
public bool|IResolvable RequireFipsDevice { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SshKeySize`<sup>Required</sup> <a name="SshKeySize" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeySize"></a>

```csharp
public double[] SshKeySize { get; }
```

- *Type:* double[]

---

##### `SshKeyType`<sup>Required</sup> <a name="SshKeyType" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.sshKeyType"></a>

```csharp
public string[] SshKeyType { get; }
```

- *Type:* string[]

---

##### `TouchPolicy`<sup>Required</sup> <a name="TouchPolicy" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.touchPolicy"></a>

```csharp
public string TouchPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustOrganizationMfaSshPivKeyRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationMfaSshPivKeyRequirements">ZeroTrustOrganizationMfaSshPivKeyRequirements</a>

---



