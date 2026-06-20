# `dnsZoneTransfersPeer` Submodule <a name="`dnsZoneTransfersPeer` Submodule" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersPeer <a name="DnsZoneTransfersPeer" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DnsZoneTransfersPeer(Construct Scope, string Id, DnsZoneTransfersPeerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable">ResetIxfrEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId">ResetTsigId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIp` <a name="ResetIp" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIxfrEnable` <a name="ResetIxfrEnable" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable"></a>

```csharp
private void ResetIxfrEnable()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetTsigId` <a name="ResetTsigId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId"></a>

```csharp
private void ResetTsigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DnsZoneTransfersPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DnsZoneTransfersPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DnsZoneTransfersPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DnsZoneTransfersPeer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DnsZoneTransfersPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DnsZoneTransfersPeer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZoneTransfersPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZoneTransfersPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput">IxfrEnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput">TsigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable">IxfrEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId">TsigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `IxfrEnableInput`<sup>Optional</sup> <a name="IxfrEnableInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput"></a>

```csharp
public bool|IResolvable IxfrEnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TsigIdInput`<sup>Optional</sup> <a name="TsigIdInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput"></a>

```csharp
public string TsigIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `IxfrEnable`<sup>Required</sup> <a name="IxfrEnable" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable"></a>

```csharp
public bool|IResolvable IxfrEnable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `TsigId`<sup>Required</sup> <a name="TsigId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId"></a>

```csharp
public string TsigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersPeerConfig <a name="DnsZoneTransfersPeerConfig" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DnsZoneTransfersPeerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    string Ip = null,
    bool|IResolvable IxfrEnable = null,
    double Port = null,
    string TsigId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name">Name</a></code> | <code>string</code> | The name of the peer. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip">Ip</a></code> | <code>string</code> | IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable">IxfrEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port">Port</a></code> | <code>double</code> | DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId">TsigId</a></code> | <code>string</code> | TSIG authentication will be used for zone transfer if configured. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to.

For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}

---

##### `IxfrEnable`<sup>Optional</sup> <a name="IxfrEnable" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable"></a>

```csharp
public bool|IResolvable IxfrEnable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}

---

##### `TsigId`<sup>Optional</sup> <a name="TsigId" id="@cdktn/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId"></a>

```csharp
public string TsigId { get; set; }
```

- *Type:* string

TSIG authentication will be used for zone transfer if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}

---



