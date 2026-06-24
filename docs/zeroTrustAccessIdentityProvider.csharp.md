# `zeroTrustAccessIdentityProvider` Submodule <a name="`zeroTrustAccessIdentityProvider` Submodule" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessIdentityProvider <a name="ZeroTrustAccessIdentityProvider" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProvider(Construct Scope, string Id, ZeroTrustAccessIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig">PutScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetSamlCertificateSetId">ResetSamlCertificateSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig">ResetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig"></a>

```csharp
private void PutConfig(ZeroTrustAccessIdentityProviderConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig"></a>

```csharp
private void PutScimConfig(ZeroTrustAccessIdentityProviderScimConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSamlCertificateSetId` <a name="ResetSamlCertificateSetId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetSamlCertificateSetId"></a>

```csharp
private void ResetSamlCertificateSetId()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig"></a>

```csharp
private void ResetScimConfig()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference">ZeroTrustAccessIdentityProviderConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSet">SamlCertificateSet</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference">ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference">ZeroTrustAccessIdentityProviderScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSetIdInput">SamlCertificateSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput">ScimConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSetId">SamlCertificateSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config"></a>

```csharp
public ZeroTrustAccessIdentityProviderConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference">ZeroTrustAccessIdentityProviderConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SamlCertificateSet`<sup>Required</sup> <a name="SamlCertificateSet" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSet"></a>

```csharp
public ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference SamlCertificateSet { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference">ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig"></a>

```csharp
public ZeroTrustAccessIdentityProviderScimConfigOutputReference ScimConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference">ZeroTrustAccessIdentityProviderScimConfigOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SamlCertificateSetIdInput`<sup>Optional</sup> <a name="SamlCertificateSetIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSetIdInput"></a>

```csharp
public string SamlCertificateSetIdInput { get; }
```

- *Type:* string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderScimConfig ScimConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SamlCertificateSetId`<sup>Required</sup> <a name="SamlCertificateSetId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.samlCertificateSetId"></a>

```csharp
public string SamlCertificateSetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessIdentityProviderConfig <a name="ZeroTrustAccessIdentityProviderConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ZeroTrustAccessIdentityProviderConfigA Config,
    string Name,
    string Type,
    string AccountId = null,
    bool|IResolvable ReadOnly = null,
    string SamlCertificateSetId = null,
    ZeroTrustAccessIdentityProviderScimConfig ScimConfig = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a></code> | The configuration parameters for the identity provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name">Name</a></code> | <code>string</code> | The name of the identity provider, shown to users on the login page. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type">Type</a></code> | <code>string</code> | The type of identity provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the identity provider is immutable and cannot be updated or deleted via the API. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.samlCertificateSetId">SamlCertificateSetId</a></code> | <code>string</code> | The UID of the SAML encryption certificate set assigned to this Identity Provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a></code> | The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config"></a>

```csharp
public ZeroTrustAccessIdentityProviderConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>

The configuration parameters for the identity provider.

To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#config ZeroTrustAccessIdentityProvider#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the identity provider, shown to users on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#name ZeroTrustAccessIdentityProvider#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of identity provider.

To determine the value for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
Available values: "onetimepin", "azureAD", "saml", "centrify", "facebook", "github", "google-apps", "google", "linkedin", "oidc", "okta", "onelogin", "pingone", "yandex", "cloudflare".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#type ZeroTrustAccessIdentityProvider#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#account_id ZeroTrustAccessIdentityProvider#account_id}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the identity provider is immutable and cannot be updated or deleted via the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#read_only ZeroTrustAccessIdentityProvider#read_only}

---

##### `SamlCertificateSetId`<sup>Optional</sup> <a name="SamlCertificateSetId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.samlCertificateSetId"></a>

```csharp
public string SamlCertificateSetId { get; set; }
```

- *Type:* string

The UID of the SAML encryption certificate set assigned to this Identity Provider.

Only present for SAML identity providers with encryption configured.
Create a certificate set via POST to `/identity_providers/{id}/saml_certificate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#saml_certificate_set_id ZeroTrustAccessIdentityProvider#saml_certificate_set_id}

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig"></a>

```csharp
public ZeroTrustAccessIdentityProviderScimConfig ScimConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>

The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#scim_config ZeroTrustAccessIdentityProvider#scim_config}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#zone_id ZeroTrustAccessIdentityProvider#zone_id}

---

### ZeroTrustAccessIdentityProviderConfigA <a name="ZeroTrustAccessIdentityProviderConfigA" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigA {
    string AppsDomain = null,
    string[] Attributes = null,
    string AuthorizationServerId = null,
    string AuthUrl = null,
    string CentrifyAccount = null,
    string CentrifyAppId = null,
    string CertsUrl = null,
    string[] Claims = null,
    string ClientId = null,
    string ClientSecret = null,
    bool|IResolvable ConditionalAccessEnabled = null,
    string DirectoryId = null,
    string EmailAttributeName = null,
    string EmailClaimName = null,
    bool|IResolvable EnableEncryption = null,
    IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] HeaderAttributes = null,
    string[] IdpPublicCerts = null,
    string IssuerUrl = null,
    string OktaAccount = null,
    string OneloginAccount = null,
    string PingEnvId = null,
    bool|IResolvable PkceEnabled = null,
    string Prompt = null,
    bool|IResolvable RestrictToAccountMembers = null,
    string[] Scopes = null,
    bool|IResolvable SignRequest = null,
    string SsoTargetUrl = null,
    bool|IResolvable SupportGroups = null,
    string TokenUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain">AppsDomain</a></code> | <code>string</code> | Your companies TLD. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes">Attributes</a></code> | <code>string[]</code> | A list of SAML attribute names that will be added to your signed JWT token and can be used in SAML policy rules. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId">AuthorizationServerId</a></code> | <code>string</code> | Your okta authorization server id. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl">AuthUrl</a></code> | <code>string</code> | The authorization_endpoint URL of your IdP. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | Your centrify account url. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | Your centrify app id. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl">CertsUrl</a></code> | <code>string</code> | The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims">Claims</a></code> | <code>string[]</code> | Custom claims. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId">ClientId</a></code> | <code>string</code> | Your OAuth Client ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Your OAuth Client Secret. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should Cloudflare try to load authentication contexts from your account. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId">DirectoryId</a></code> | <code>string</code> | Your Azure directory uuid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | The attribute name for email in the SAML response. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName">EmailClaimName</a></code> | <code>string</code> | The claim name for email in the id_token response. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.enableEncryption">EnableEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable SAML assertion encryption. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.headerAttributes">HeaderAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]</code> | Add a list of attribute names that will be returned in the response header from the Access callback. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCerts">IdpPublicCerts</a></code> | <code>string[]</code> | X509 certificate to verify the signature in the SAML authentication response. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | IdP Entity ID or Issuer URL. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | Your okta account url. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | Your OneLogin account url. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId">PingEnvId</a></code> | <code>string</code> | Your PingOne environment identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled">PkceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable Proof Key for Code Exchange (PKCE). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.prompt">Prompt</a></code> | <code>string</code> | Indicates the type of user interaction that is required. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.restrictToAccountMembers">RestrictToAccountMembers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, only users who are members of your Cloudflare account can authenticate through this identity provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes">Scopes</a></code> | <code>string[]</code> | OAuth scopes. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest">SignRequest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Sign the SAML authentication request with Access credentials. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | URL to send the SAML authentication requests to. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups">SupportGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should Cloudflare try to load groups from your account. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | The token_endpoint URL of your IdP. |

---

##### `AppsDomain`<sup>Optional</sup> <a name="AppsDomain" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain"></a>

```csharp
public string AppsDomain { get; set; }
```

- *Type:* string

Your companies TLD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes"></a>

```csharp
public string[] Attributes { get; set; }
```

- *Type:* string[]

A list of SAML attribute names that will be added to your signed JWT token and can be used in SAML policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}

---

##### `AuthorizationServerId`<sup>Optional</sup> <a name="AuthorizationServerId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId"></a>

```csharp
public string AuthorizationServerId { get; set; }
```

- *Type:* string

Your okta authorization server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl"></a>

```csharp
public string AuthUrl { get; set; }
```

- *Type:* string

The authorization_endpoint URL of your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}

---

##### `CentrifyAccount`<sup>Optional</sup> <a name="CentrifyAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; set; }
```

- *Type:* string

Your centrify account url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}

---

##### `CentrifyAppId`<sup>Optional</sup> <a name="CentrifyAppId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; set; }
```

- *Type:* string

Your centrify app id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}

---

##### `CertsUrl`<sup>Optional</sup> <a name="CertsUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl"></a>

```csharp
public string CertsUrl { get; set; }
```

- *Type:* string

The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}

---

##### `Claims`<sup>Optional</sup> <a name="Claims" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims"></a>

```csharp
public string[] Claims { get; set; }
```

- *Type:* string[]

Custom claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Your OAuth Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Your OAuth Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}

---

##### `ConditionalAccessEnabled`<sup>Optional</sup> <a name="ConditionalAccessEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```csharp
public bool|IResolvable ConditionalAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should Cloudflare try to load authentication contexts from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Your Azure directory uuid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}

---

##### `EmailAttributeName`<sup>Optional</sup> <a name="EmailAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; set; }
```

- *Type:* string

The attribute name for email in the SAML response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}

---

##### `EmailClaimName`<sup>Optional</sup> <a name="EmailClaimName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName"></a>

```csharp
public string EmailClaimName { get; set; }
```

- *Type:* string

The claim name for email in the id_token response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.enableEncryption"></a>

```csharp
public bool|IResolvable EnableEncryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable SAML assertion encryption.

When enabled, the Identity Provider will encrypt
SAML assertions using the certificate from the assigned certificate set.

To enable encryption:

1. Create a certificate set via POST to `/identity_providers/{id}/saml_certificate`
2. Set this field to `true` and include `saml_certificate_set_id` in the PUT request
3. Configure the public certificate in your external Identity Provider

Note: Requires `saml_certificate_set_id` to be set when `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#enable_encryption ZeroTrustAccessIdentityProvider#enable_encryption}

---

##### `HeaderAttributes`<sup>Optional</sup> <a name="HeaderAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.headerAttributes"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] HeaderAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]

Add a list of attribute names that will be returned in the response header from the Access callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#header_attributes ZeroTrustAccessIdentityProvider#header_attributes}

---

##### `IdpPublicCerts`<sup>Optional</sup> <a name="IdpPublicCerts" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCerts"></a>

```csharp
public string[] IdpPublicCerts { get; set; }
```

- *Type:* string[]

X509 certificate to verify the signature in the SAML authentication response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#idp_public_certs ZeroTrustAccessIdentityProvider#idp_public_certs}

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

IdP Entity ID or Issuer URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}

---

##### `OktaAccount`<sup>Optional</sup> <a name="OktaAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; set; }
```

- *Type:* string

Your okta account url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}

---

##### `OneloginAccount`<sup>Optional</sup> <a name="OneloginAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; set; }
```

- *Type:* string

Your OneLogin account url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}

---

##### `PingEnvId`<sup>Optional</sup> <a name="PingEnvId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId"></a>

```csharp
public string PingEnvId { get; set; }
```

- *Type:* string

Your PingOne environment identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}

---

##### `PkceEnabled`<sup>Optional</sup> <a name="PkceEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled"></a>

```csharp
public bool|IResolvable PkceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable Proof Key for Code Exchange (PKCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}

---

##### `Prompt`<sup>Optional</sup> <a name="Prompt" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.prompt"></a>

```csharp
public string Prompt { get; set; }
```

- *Type:* string

Indicates the type of user interaction that is required.

prompt=login forces the user to enter their credentials on that request, negating single-sign on. prompt=none is the opposite. It ensures that the user isn't presented with any interactive prompt. If the request can't be completed silently by using single-sign on, the Microsoft identity platform returns an interaction_required error. prompt=select_account interrupts single sign-on providing account selection experience listing all the accounts either in session or any remembered account or an option to choose to use a different account altogether.
Available values: "login", "select_account", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#prompt ZeroTrustAccessIdentityProvider#prompt}

---

##### `RestrictToAccountMembers`<sup>Optional</sup> <a name="RestrictToAccountMembers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.restrictToAccountMembers"></a>

```csharp
public bool|IResolvable RestrictToAccountMembers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, only users who are members of your Cloudflare account can authenticate through this identity provider.

When disabled, any user with a Cloudflare account can authenticate, subject to your Access policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#restrict_to_account_members ZeroTrustAccessIdentityProvider#restrict_to_account_members}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

OAuth scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest"></a>

```csharp
public bool|IResolvable SignRequest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Sign the SAML authentication request with Access credentials.

To verify the signature, use the public key from the Access certs endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}

---

##### `SsoTargetUrl`<sup>Optional</sup> <a name="SsoTargetUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; set; }
```

- *Type:* string

URL to send the SAML authentication requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}

---

##### `SupportGroups`<sup>Optional</sup> <a name="SupportGroups" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups"></a>

```csharp
public bool|IResolvable SupportGroups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should Cloudflare try to load groups from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

The token_endpoint URL of your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}

---

### ZeroTrustAccessIdentityProviderConfigHeaderAttributes <a name="ZeroTrustAccessIdentityProviderConfigHeaderAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigHeaderAttributes {
    string AttributeName = null,
    string HeaderName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes.property.attributeName">AttributeName</a></code> | <code>string</code> | attribute name from the IDP. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes.property.headerName">HeaderName</a></code> | <code>string</code> | header that will be added on the request to the origin. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

attribute name from the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#attribute_name ZeroTrustAccessIdentityProvider#attribute_name}

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

header that will be added on the request to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#header_name ZeroTrustAccessIdentityProvider#header_name}

---

### ZeroTrustAccessIdentityProviderSamlCertificateSet <a name="ZeroTrustAccessIdentityProviderSamlCertificateSet" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderSamlCertificateSet {

};
```


### ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate <a name="ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate {

};
```


### ZeroTrustAccessIdentityProviderScimConfig <a name="ZeroTrustAccessIdentityProviderScimConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderScimConfig {
    bool|IResolvable Enabled = null,
    string IdentityUpdateBehavior = null,
    bool|IResolvable SeatDeprovision = null,
    bool|IResolvable UserDeprovision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag to enable or disable SCIM for the identity provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>string</code> | Indicates how a SCIM event updates a user identity used for policy evaluation. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision">SeatDeprovision</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision">UserDeprovision</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag to enable or disable SCIM for the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}

---

##### `IdentityUpdateBehavior`<sup>Optional</sup> <a name="IdentityUpdateBehavior" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.identityUpdateBehavior"></a>

```csharp
public string IdentityUpdateBehavior { get; set; }
```

- *Type:* string

Indicates how a SCIM event updates a user identity used for policy evaluation.

Use "automatic" to automatically update a user's identity and augment it with fields from the SCIM user resource. Use "reauth" to force re-authentication on group membership updates, user identity update will only occur after successful re-authentication. With "reauth" identities will not contain fields from the SCIM user resource. With "no_action" identities will not be changed by SCIM updates in any way and users will not be prompted to reauthenticate.
Available values: "automatic", "reauth", "no_action".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#identity_update_behavior ZeroTrustAccessIdentityProvider#identity_update_behavior}

---

##### `SeatDeprovision`<sup>Optional</sup> <a name="SeatDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```csharp
public bool|IResolvable SeatDeprovision { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider.

This cannot be enabled unless user_deprovision is also enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}

---

##### `UserDeprovision`<sup>Optional</sup> <a name="UserDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision"></a>

```csharp
public bool|IResolvable UserDeprovision { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessIdentityProviderConfigAOutputReference <a name="ZeroTrustAccessIdentityProviderConfigAOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.putHeaderAttributes">PutHeaderAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain">ResetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">ResetAuthorizationServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">ResetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">ResetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl">ResetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims">ResetClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">ResetConditionalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">ResetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName">ResetEmailClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetHeaderAttributes">ResetHeaderAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCerts">ResetIdpPublicCerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount">ResetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount">ResetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId">ResetPingEnvId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled">ResetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPrompt">ResetPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetRestrictToAccountMembers">ResetRestrictToAccountMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">ResetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups">ResetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderAttributes` <a name="PutHeaderAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.putHeaderAttributes"></a>

```csharp
private void PutHeaderAttributes(IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.putHeaderAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]

---

##### `ResetAppsDomain` <a name="ResetAppsDomain" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```csharp
private void ResetAppsDomain()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAuthorizationServerId` <a name="ResetAuthorizationServerId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```csharp
private void ResetAuthorizationServerId()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```csharp
private void ResetAuthUrl()
```

##### `ResetCentrifyAccount` <a name="ResetCentrifyAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```csharp
private void ResetCentrifyAccount()
```

##### `ResetCentrifyAppId` <a name="ResetCentrifyAppId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```csharp
private void ResetCentrifyAppId()
```

##### `ResetCertsUrl` <a name="ResetCertsUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```csharp
private void ResetCertsUrl()
```

##### `ResetClaims` <a name="ResetClaims" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```csharp
private void ResetClaims()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetConditionalAccessEnabled` <a name="ResetConditionalAccessEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```csharp
private void ResetConditionalAccessEnabled()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetEmailAttributeName` <a name="ResetEmailAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```csharp
private void ResetEmailAttributeName()
```

##### `ResetEmailClaimName` <a name="ResetEmailClaimName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```csharp
private void ResetEmailClaimName()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEnableEncryption"></a>

```csharp
private void ResetEnableEncryption()
```

##### `ResetHeaderAttributes` <a name="ResetHeaderAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetHeaderAttributes"></a>

```csharp
private void ResetHeaderAttributes()
```

##### `ResetIdpPublicCerts` <a name="ResetIdpPublicCerts" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCerts"></a>

```csharp
private void ResetIdpPublicCerts()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```csharp
private void ResetIssuerUrl()
```

##### `ResetOktaAccount` <a name="ResetOktaAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```csharp
private void ResetOktaAccount()
```

##### `ResetOneloginAccount` <a name="ResetOneloginAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```csharp
private void ResetOneloginAccount()
```

##### `ResetPingEnvId` <a name="ResetPingEnvId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```csharp
private void ResetPingEnvId()
```

##### `ResetPkceEnabled` <a name="ResetPkceEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```csharp
private void ResetPkceEnabled()
```

##### `ResetPrompt` <a name="ResetPrompt" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPrompt"></a>

```csharp
private void ResetPrompt()
```

##### `ResetRestrictToAccountMembers` <a name="ResetRestrictToAccountMembers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetRestrictToAccountMembers"></a>

```csharp
private void ResetRestrictToAccountMembers()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```csharp
private void ResetSignRequest()
```

##### `ResetSsoTargetUrl` <a name="ResetSsoTargetUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```csharp
private void ResetSsoTargetUrl()
```

##### `ResetSupportGroups` <a name="ResetSupportGroups" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```csharp
private void ResetSupportGroups()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributes">HeaderAttributes</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList">ZeroTrustAccessIdentityProviderConfigHeaderAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput">AppsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput">AttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">AuthorizationServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">CentrifyAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">CentrifyAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput">CertsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput">ClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">ConditionalAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">EmailAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">EmailClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributesInput">HeaderAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertsInput">IdpPublicCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">OktaAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">OneloginAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">PingEnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">PkceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.promptInput">PromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.restrictToAccountMembersInput">RestrictToAccountMembersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">SsoTargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">SupportGroupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain">AppsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl">CertsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims">Claims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCerts">IdpPublicCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.prompt">Prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.restrictToAccountMembers">RestrictToAccountMembers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest">SignRequest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups">SupportGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderAttributes`<sup>Required</sup> <a name="HeaderAttributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributes"></a>

```csharp
public ZeroTrustAccessIdentityProviderConfigHeaderAttributesList HeaderAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList">ZeroTrustAccessIdentityProviderConfigHeaderAttributesList</a>

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `AppsDomainInput`<sup>Optional</sup> <a name="AppsDomainInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```csharp
public string AppsDomainInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```csharp
public string[] AttributesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationServerIdInput`<sup>Optional</sup> <a name="AuthorizationServerIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```csharp
public string AuthorizationServerIdInput { get; }
```

- *Type:* string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```csharp
public string AuthUrlInput { get; }
```

- *Type:* string

---

##### `CentrifyAccountInput`<sup>Optional</sup> <a name="CentrifyAccountInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```csharp
public string CentrifyAccountInput { get; }
```

- *Type:* string

---

##### `CentrifyAppIdInput`<sup>Optional</sup> <a name="CentrifyAppIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```csharp
public string CentrifyAppIdInput { get; }
```

- *Type:* string

---

##### `CertsUrlInput`<sup>Optional</sup> <a name="CertsUrlInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```csharp
public string CertsUrlInput { get; }
```

- *Type:* string

---

##### `ClaimsInput`<sup>Optional</sup> <a name="ClaimsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```csharp
public string[] ClaimsInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ConditionalAccessEnabledInput`<sup>Optional</sup> <a name="ConditionalAccessEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```csharp
public bool|IResolvable ConditionalAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EmailAttributeNameInput`<sup>Optional</sup> <a name="EmailAttributeNameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```csharp
public string EmailAttributeNameInput { get; }
```

- *Type:* string

---

##### `EmailClaimNameInput`<sup>Optional</sup> <a name="EmailClaimNameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```csharp
public string EmailClaimNameInput { get; }
```

- *Type:* string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.enableEncryptionInput"></a>

```csharp
public bool|IResolvable EnableEncryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeaderAttributesInput`<sup>Optional</sup> <a name="HeaderAttributesInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.headerAttributesInput"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] HeaderAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]

---

##### `IdpPublicCertsInput`<sup>Optional</sup> <a name="IdpPublicCertsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertsInput"></a>

```csharp
public string[] IdpPublicCertsInput { get; }
```

- *Type:* string[]

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `OktaAccountInput`<sup>Optional</sup> <a name="OktaAccountInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```csharp
public string OktaAccountInput { get; }
```

- *Type:* string

---

##### `OneloginAccountInput`<sup>Optional</sup> <a name="OneloginAccountInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```csharp
public string OneloginAccountInput { get; }
```

- *Type:* string

---

##### `PingEnvIdInput`<sup>Optional</sup> <a name="PingEnvIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```csharp
public string PingEnvIdInput { get; }
```

- *Type:* string

---

##### `PkceEnabledInput`<sup>Optional</sup> <a name="PkceEnabledInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```csharp
public bool|IResolvable PkceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.promptInput"></a>

```csharp
public string PromptInput { get; }
```

- *Type:* string

---

##### `RestrictToAccountMembersInput`<sup>Optional</sup> <a name="RestrictToAccountMembersInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.restrictToAccountMembersInput"></a>

```csharp
public bool|IResolvable RestrictToAccountMembersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```csharp
public bool|IResolvable SignRequestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SsoTargetUrlInput`<sup>Optional</sup> <a name="SsoTargetUrlInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```csharp
public string SsoTargetUrlInput { get; }
```

- *Type:* string

---

##### `SupportGroupsInput`<sup>Optional</sup> <a name="SupportGroupsInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```csharp
public bool|IResolvable SupportGroupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```csharp
public string AppsDomain { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```csharp
public string AuthorizationServerId { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; }
```

- *Type:* string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; }
```

- *Type:* string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```csharp
public string CertsUrl { get; }
```

- *Type:* string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims"></a>

```csharp
public string[] Claims { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```csharp
public bool|IResolvable ConditionalAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; }
```

- *Type:* string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```csharp
public string EmailClaimName { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.enableEncryption"></a>

```csharp
public bool|IResolvable EnableEncryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdpPublicCerts`<sup>Required</sup> <a name="IdpPublicCerts" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCerts"></a>

```csharp
public string[] IdpPublicCerts { get; }
```

- *Type:* string[]

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; }
```

- *Type:* string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; }
```

- *Type:* string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```csharp
public string PingEnvId { get; }
```

- *Type:* string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```csharp
public bool|IResolvable PkceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.prompt"></a>

```csharp
public string Prompt { get; }
```

- *Type:* string

---

##### `RestrictToAccountMembers`<sup>Required</sup> <a name="RestrictToAccountMembers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.restrictToAccountMembers"></a>

```csharp
public bool|IResolvable RestrictToAccountMembers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```csharp
public bool|IResolvable SignRequest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; }
```

- *Type:* string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```csharp
public bool|IResolvable SupportGroups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>

---


### ZeroTrustAccessIdentityProviderConfigHeaderAttributesList <a name="ZeroTrustAccessIdentityProviderConfigHeaderAttributesList" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigHeaderAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get"></a>

```csharp
private ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>[]

---


### ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference <a name="ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.resetHeaderName"></a>

```csharp
private void ResetHeaderName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderConfigHeaderAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigHeaderAttributes">ZeroTrustAccessIdentityProviderConfigHeaderAttributes</a>

---


### ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference <a name="ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.isCurrent">IsCurrent</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate">ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.isCurrent"></a>

```csharp
public IResolvable IsCurrent { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate">ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificate</a>

---


### ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference <a name="ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.currentCertificate">CurrentCertificate</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference">ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.previousCertificate">PreviousCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSet">ZeroTrustAccessIdentityProviderSamlCertificateSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CurrentCertificate`<sup>Required</sup> <a name="CurrentCertificate" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.currentCertificate"></a>

```csharp
public ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference CurrentCertificate { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference">ZeroTrustAccessIdentityProviderSamlCertificateSetCurrentCertificateOutputReference</a>

---

##### `PreviousCertificate`<sup>Required</sup> <a name="PreviousCertificate" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.previousCertificate"></a>

```csharp
public string PreviousCertificate { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSetOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessIdentityProviderSamlCertificateSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderSamlCertificateSet">ZeroTrustAccessIdentityProviderSamlCertificateSet</a>

---


### ZeroTrustAccessIdentityProviderScimConfigOutputReference <a name="ZeroTrustAccessIdentityProviderScimConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderScimConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetIdentityUpdateBehavior">ResetIdentityUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">ResetSeatDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">ResetUserDeprovision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdentityUpdateBehavior` <a name="ResetIdentityUpdateBehavior" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetIdentityUpdateBehavior"></a>

```csharp
private void ResetIdentityUpdateBehavior()
```

##### `ResetSeatDeprovision` <a name="ResetSeatDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```csharp
private void ResetSeatDeprovision()
```

##### `ResetUserDeprovision` <a name="ResetUserDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```csharp
private void ResetUserDeprovision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.scimBaseUrl">ScimBaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehaviorInput">IdentityUpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">SeatDeprovisionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">UserDeprovisionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScimBaseUrl`<sup>Required</sup> <a name="ScimBaseUrl" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.scimBaseUrl"></a>

```csharp
public string ScimBaseUrl { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityUpdateBehaviorInput`<sup>Optional</sup> <a name="IdentityUpdateBehaviorInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehaviorInput"></a>

```csharp
public string IdentityUpdateBehaviorInput { get; }
```

- *Type:* string

---

##### `SeatDeprovisionInput`<sup>Optional</sup> <a name="SeatDeprovisionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```csharp
public bool|IResolvable SeatDeprovisionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserDeprovisionInput`<sup>Optional</sup> <a name="UserDeprovisionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```csharp
public bool|IResolvable UserDeprovisionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityUpdateBehavior`<sup>Required</sup> <a name="IdentityUpdateBehavior" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior"></a>

```csharp
public string IdentityUpdateBehavior { get; }
```

- *Type:* string

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```csharp
public bool|IResolvable SeatDeprovision { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```csharp
public bool|IResolvable UserDeprovision { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessIdentityProviderScimConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>

---



