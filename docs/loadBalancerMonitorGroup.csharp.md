# `loadBalancerMonitorGroup` Submodule <a name="`loadBalancerMonitorGroup` Submodule" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitorGroup <a name="LoadBalancerMonitorGroup" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new LoadBalancerMonitorGroup(Construct Scope, string Id, LoadBalancerMonitorGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig">LoadBalancerMonitorGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig">LoadBalancerMonitorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers">PutMembers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMembers` <a name="PutMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers"></a>

```csharp
private void PutMembers(IResolvable|LoadBalancerMonitorGroupMembers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

LoadBalancerMonitorGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

LoadBalancerMonitorGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

LoadBalancerMonitorGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

LoadBalancerMonitorGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerMonitorGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerMonitorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members">Members</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput">MembersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members"></a>

```csharp
public LoadBalancerMonitorGroupMembersList Members { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput"></a>

```csharp
public IResolvable|LoadBalancerMonitorGroupMembers[] MembersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorGroupConfig <a name="LoadBalancerMonitorGroupConfig" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new LoadBalancerMonitorGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Description,
    IResolvable|LoadBalancerMonitorGroupMembers[] Members
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description">Description</a></code> | <code>string</code> | A short description of the monitor group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members">Members</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | List of monitors in this group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#account_id LoadBalancerMonitorGroup#account_id}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short description of the monitor group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#description LoadBalancerMonitorGroup#description}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members"></a>

```csharp
public IResolvable|LoadBalancerMonitorGroupMembers[] Members { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

List of monitors in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#members LoadBalancerMonitorGroup#members}

---

### LoadBalancerMonitorGroupMembers <a name="LoadBalancerMonitorGroupMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new LoadBalancerMonitorGroupMembers {
    bool|IResolvable Enabled,
    string MonitorId,
    bool|IResolvable MonitoringOnly,
    bool|IResolvable MustBeHealthy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this monitor is enabled in the group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId">MonitorId</a></code> | <code>string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly">MonitoringOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this monitor is used for monitoring only (does not affect pool health). |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy">MustBeHealthy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this monitor must be healthy for the pool to be considered healthy. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this monitor is enabled in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#enabled LoadBalancerMonitorGroup#enabled}

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId"></a>

```csharp
public string MonitorId { get; set; }
```

- *Type:* string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitor_id LoadBalancerMonitorGroup#monitor_id}

---

##### `MonitoringOnly`<sup>Required</sup> <a name="MonitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly"></a>

```csharp
public bool|IResolvable MonitoringOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this monitor is used for monitoring only (does not affect pool health).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#monitoring_only LoadBalancerMonitorGroup#monitoring_only}

---

##### `MustBeHealthy`<sup>Required</sup> <a name="MustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy"></a>

```csharp
public bool|IResolvable MustBeHealthy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this monitor must be healthy for the pool to be considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/load_balancer_monitor_group#must_be_healthy LoadBalancerMonitorGroup#must_be_healthy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerMonitorGroupMembersList <a name="LoadBalancerMonitorGroupMembersList" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new LoadBalancerMonitorGroupMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get"></a>

```csharp
private LoadBalancerMonitorGroupMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerMonitorGroupMembers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>[]

---


### LoadBalancerMonitorGroupMembersOutputReference <a name="LoadBalancerMonitorGroupMembersOutputReference" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new LoadBalancerMonitorGroupMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput">MonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput">MonitoringOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput">MustBeHealthyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId">MonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly">MonitoringOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy">MustBeHealthy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput"></a>

```csharp
public string MonitorIdInput { get; }
```

- *Type:* string

---

##### `MonitoringOnlyInput`<sup>Optional</sup> <a name="MonitoringOnlyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput"></a>

```csharp
public bool|IResolvable MonitoringOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MustBeHealthyInput`<sup>Optional</sup> <a name="MustBeHealthyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput"></a>

```csharp
public bool|IResolvable MustBeHealthyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId"></a>

```csharp
public string MonitorId { get; }
```

- *Type:* string

---

##### `MonitoringOnly`<sup>Required</sup> <a name="MonitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly"></a>

```csharp
public bool|IResolvable MonitoringOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MustBeHealthy`<sup>Required</sup> <a name="MustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy"></a>

```csharp
public bool|IResolvable MustBeHealthy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoadBalancerMonitorGroupMembers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>

---



