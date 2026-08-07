# `moqRelay` Submodule <a name="`moqRelay` Submodule" id="@cdktn/provider-cloudflare.moqRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MoqRelay <a name="MoqRelay" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay cloudflare_moq_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelay(Construct Scope, string Id, MoqRelayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig">MoqRelayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig">MoqRelayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig"></a>

```csharp
private void PutConfig(MoqRelayConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig"></a>

```csharp
private void ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MoqRelay.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MoqRelay.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MoqRelay.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MoqRelay.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MoqRelay to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MoqRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MoqRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe">TokenPublishSubscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe">TokenSubscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config"></a>

```csharp
public MoqRelayConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TokenPublishSubscribe`<sup>Required</sup> <a name="TokenPublishSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe"></a>

```csharp
public string TokenPublishSubscribe { get; }
```

- *Type:* string

---

##### `TokenSubscribe`<sup>Required</sup> <a name="TokenSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe"></a>

```csharp
public string TokenSubscribe { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput"></a>

```csharp
public IResolvable|MoqRelayConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MoqRelayConfig <a name="MoqRelayConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    MoqRelayConfigA Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name">Name</a></code> | <code>string</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config"></a>

```csharp
public MoqRelayConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#config MoqRelay#config}

---

### MoqRelayConfigA <a name="MoqRelayConfigA" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigA {
    MoqRelayConfigLingeringSubscribe LingeringSubscribe = null,
    MoqRelayConfigUpstreams Upstreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe">LingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track. |

---

##### `LingeringSubscribe`<sup>Optional</sup> <a name="LingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe"></a>

```csharp
public MoqRelayConfigLingeringSubscribe LingeringSubscribe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}.

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams"></a>

```csharp
public MoqRelayConfigUpstreams Upstreams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigLingeringSubscribe <a name="MoqRelayConfigLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigLingeringSubscribe {
    bool|IResolvable Enabled = null,
    double MaxTimeoutMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs">MaxTimeoutMs</a></code> | <code>double</code> | Relay-level ceiling on lingering subscribe timeout (ms). Default 30000. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `MaxTimeoutMs`<sup>Optional</sup> <a name="MaxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs"></a>

```csharp
public double MaxTimeoutMs { get; set; }
```

- *Type:* double

Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}

---

### MoqRelayConfigUpstreams <a name="MoqRelayConfigUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigUpstreams {
    bool|IResolvable Enabled = null,
    IResolvable|MoqRelayConfigUpstreamsUpstreams[] Upstreams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams">Upstreams</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | Ordered list of upstream MOQT server publishers. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreamsUpstreams[] Upstreams { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

Ordered list of upstream MOQT server publishers.

Each entry is an
object (not a bare string) so per-upstream configuration can be
added in the future without another breaking change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigUpstreamsUpstreams <a name="MoqRelayConfigUpstreamsUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigUpstreamsUpstreams {
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url">Url</a></code> | <code>string</code> | Upstream MOQT server publisher URL. |

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Upstream MOQT server publisher URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#url MoqRelay#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MoqRelayConfigAOutputReference <a name="MoqRelayConfigAOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe">PutLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe">ResetLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLingeringSubscribe` <a name="PutLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe"></a>

```csharp
private void PutLingeringSubscribe(MoqRelayConfigLingeringSubscribe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams"></a>

```csharp
private void PutUpstreams(MoqRelayConfigUpstreams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `ResetLingeringSubscribe` <a name="ResetLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe"></a>

```csharp
private void ResetLingeringSubscribe()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams"></a>

```csharp
private void ResetUpstreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe">LingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput">LingeringSubscribeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput">UpstreamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LingeringSubscribe`<sup>Required</sup> <a name="LingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe"></a>

```csharp
public MoqRelayConfigLingeringSubscribeOutputReference LingeringSubscribe { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a>

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams"></a>

```csharp
public MoqRelayConfigUpstreamsOutputReference Upstreams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a>

---

##### `LingeringSubscribeInput`<sup>Optional</sup> <a name="LingeringSubscribeInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput"></a>

```csharp
public IResolvable|MoqRelayConfigLingeringSubscribe LingeringSubscribeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreams UpstreamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MoqRelayConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---


### MoqRelayConfigLingeringSubscribeOutputReference <a name="MoqRelayConfigLingeringSubscribeOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigLingeringSubscribeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs">ResetMaxTimeoutMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMaxTimeoutMs` <a name="ResetMaxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs"></a>

```csharp
private void ResetMaxTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput">MaxTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs">MaxTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTimeoutMsInput`<sup>Optional</sup> <a name="MaxTimeoutMsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput"></a>

```csharp
public double MaxTimeoutMsInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTimeoutMs`<sup>Required</sup> <a name="MaxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs"></a>

```csharp
public double MaxTimeoutMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MoqRelayConfigLingeringSubscribe InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---


### MoqRelayConfigUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams"></a>

```csharp
private void PutUpstreams(IResolvable|MoqRelayConfigUpstreamsUpstreams[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams"></a>

```csharp
private void ResetUpstreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput">UpstreamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams"></a>

```csharp
public MoqRelayConfigUpstreamsUpstreamsList Upstreams { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreamsUpstreams[] UpstreamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---


### MoqRelayConfigUpstreamsUpstreamsList <a name="MoqRelayConfigUpstreamsUpstreamsList" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigUpstreamsUpstreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get"></a>

```csharp
private MoqRelayConfigUpstreamsUpstreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreamsUpstreams[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>[]

---


### MoqRelayConfigUpstreamsUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MoqRelayConfigUpstreamsUpstreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MoqRelayConfigUpstreamsUpstreams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>

---



