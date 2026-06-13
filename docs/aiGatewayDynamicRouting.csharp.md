# `aiGatewayDynamicRouting` Submodule <a name="`aiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayDynamicRouting <a name="AiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRouting(Construct Scope, string Id, AiGatewayDynamicRoutingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig">AiGatewayDynamicRoutingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig">AiGatewayDynamicRoutingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements">PutElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElements` <a name="PutElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements"></a>

```csharp
private void PutElements(IResolvable|AiGatewayDynamicRoutingElements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiGatewayDynamicRouting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiGatewayDynamicRouting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiGatewayDynamicRouting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AiGatewayDynamicRouting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGatewayDynamicRouting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route">Route</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success">Success</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version">Version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput">ElementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment"></a>

```csharp
public AiGatewayDynamicRoutingDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements"></a>

```csharp
public AiGatewayDynamicRoutingElementsList Elements { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route"></a>

```csharp
public AiGatewayDynamicRoutingRouteOutputReference Route { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success"></a>

```csharp
public IResolvable Success { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version"></a>

```csharp
public AiGatewayDynamicRoutingVersionOutputReference Version { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ElementsInput`<sup>Optional</sup> <a name="ElementsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElements[] ElementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayDynamicRoutingConfig <a name="AiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|AiGatewayDynamicRoutingElements[] Elements,
    string GatewayId,
    string Name,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements">Elements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElements[] Elements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

### AiGatewayDynamicRoutingDeployment <a name="AiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingDeployment {

};
```


### AiGatewayDynamicRoutingElements <a name="AiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElements {
    string Id,
    AiGatewayDynamicRoutingElementsOutputs Outputs,
    string Type,
    AiGatewayDynamicRoutingElementsProperties Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type">Type</a></code> | <code>string</code> | Available values: "start", "conditional", "percentage", "rate", "model", "end". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputs Outputs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "start", "conditional", "percentage", "rate", "model", "end".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties"></a>

```csharp
public AiGatewayDynamicRoutingElementsProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}.

---

### AiGatewayDynamicRoutingElementsOutputs <a name="AiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputs {
    string ElementId = null,
    AiGatewayDynamicRoutingElementsOutputsFallback Fallback = null,
    AiGatewayDynamicRoutingElementsOutputsFalse False = null,
    AiGatewayDynamicRoutingElementsOutputsNext Next = null,
    AiGatewayDynamicRoutingElementsOutputsSuccess Success = null,
    AiGatewayDynamicRoutingElementsOutputsTrue True = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false">False</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next">Next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success">Success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true">True</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}. |

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsFallback Fallback { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}.

---

##### `False`<sup>Optional</sup> <a name="False" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsFalse False { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}.

---

##### `Next`<sup>Optional</sup> <a name="Next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsNext Next { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}.

---

##### `Success`<sup>Optional</sup> <a name="Success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsSuccess Success { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}.

---

##### `True`<sup>Optional</sup> <a name="True" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsTrue True { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}.

---

### AiGatewayDynamicRoutingElementsOutputsFallback <a name="AiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsFallback {
    string ElementId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsFalse <a name="AiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsFalse {
    string ElementId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsNext <a name="AiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsNext {
    string ElementId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsSuccess <a name="AiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsSuccess {
    string ElementId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsTrue <a name="AiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsTrue {
    string ElementId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsProperties <a name="AiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsProperties {
    string AiGatewayDynamicRoutingProvider = null,
    string Conditions = null,
    string Key = null,
    double Limit = null,
    string LimitType = null,
    string Model = null,
    double Retries = null,
    double Timeout = null,
    double Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider">AiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions">Conditions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType">LimitType</a></code> | <code>string</code> | Available values: "count", "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries">Retries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window">Window</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}. |

---

##### `AiGatewayDynamicRoutingProvider`<sup>Optional</sup> <a name="AiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider"></a>

```csharp
public string AiGatewayDynamicRoutingProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions"></a>

```csharp
public string Conditions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}.

---

##### `LimitType`<sup>Optional</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType"></a>

```csharp
public string LimitType { get; set; }
```

- *Type:* string

Available values: "count", "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}.

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window"></a>

```csharp
public double Window { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}.

---

### AiGatewayDynamicRoutingRoute <a name="AiGatewayDynamicRoutingRoute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRoute {

};
```


### AiGatewayDynamicRoutingRouteDeployment <a name="AiGatewayDynamicRoutingRouteDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteDeployment {

};
```


### AiGatewayDynamicRoutingRouteElements <a name="AiGatewayDynamicRoutingRouteElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElements {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputs <a name="AiGatewayDynamicRoutingRouteElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputs {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputsFallback <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsFallback {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputsFalse <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsFalse {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputsNext <a name="AiGatewayDynamicRoutingRouteElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsNext {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputsSuccess <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsSuccess {

};
```


### AiGatewayDynamicRoutingRouteElementsOutputsTrue <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsTrue {

};
```


### AiGatewayDynamicRoutingRouteElementsProperties <a name="AiGatewayDynamicRoutingRouteElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsProperties {

};
```


### AiGatewayDynamicRoutingRouteVersion <a name="AiGatewayDynamicRoutingRouteVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteVersion {

};
```


### AiGatewayDynamicRoutingVersion <a name="AiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingVersion {

};
```


## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDynamicRoutingDeploymentOutputReference <a name="AiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a>

---


### AiGatewayDynamicRoutingElementsList <a name="AiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get"></a>

```csharp
private AiGatewayDynamicRoutingElementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>[]

---


### AiGatewayDynamicRoutingElementsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs"></a>

```csharp
private void PutOutputs(AiGatewayDynamicRoutingElementsOutputs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties"></a>

```csharp
private void PutProperties(AiGatewayDynamicRoutingElementsProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput">OutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsOutputReference Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```csharp
public AiGatewayDynamicRoutingElementsPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputs OutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsProperties PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>

---


### AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFallback InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFalse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsNextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsNext InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback">PutFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse">PutFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext">PutNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess">PutSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue">PutTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse">ResetFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext">ResetNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess">ResetSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue">ResetTrue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFallback` <a name="PutFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback"></a>

```csharp
private void PutFallback(AiGatewayDynamicRoutingElementsOutputsFallback Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `PutFalse` <a name="PutFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse"></a>

```csharp
private void PutFalse(AiGatewayDynamicRoutingElementsOutputsFalse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `PutNext` <a name="PutNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext"></a>

```csharp
private void PutNext(AiGatewayDynamicRoutingElementsOutputsNext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `PutSuccess` <a name="PutSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess"></a>

```csharp
private void PutSuccess(AiGatewayDynamicRoutingElementsOutputsSuccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `PutTrue` <a name="PutTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue"></a>

```csharp
private void PutTrue(AiGatewayDynamicRoutingElementsOutputsTrue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId"></a>

```csharp
private void ResetElementId()
```

##### `ResetFallback` <a name="ResetFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback"></a>

```csharp
private void ResetFallback()
```

##### `ResetFalse` <a name="ResetFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse"></a>

```csharp
private void ResetFalse()
```

##### `ResetNext` <a name="ResetNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext"></a>

```csharp
private void ResetNext()
```

##### `ResetSuccess` <a name="ResetSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess"></a>

```csharp
private void ResetSuccess()
```

##### `ResetTrue` <a name="ResetTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue"></a>

```csharp
private void ResetTrue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">False</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">Next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">True</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput">FalseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput">NextInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput">SuccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput">TrueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference Fallback { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `False`<sup>Required</sup> <a name="False" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsFalseOutputReference False { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsNextOutputReference Next { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference Success { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `True`<sup>Required</sup> <a name="True" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```csharp
public AiGatewayDynamicRoutingElementsOutputsTrueOutputReference True { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFallback FallbackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `FalseInput`<sup>Optional</sup> <a name="FalseInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsFalse FalseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `NextInput`<sup>Optional</sup> <a name="NextInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsNext NextInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `SuccessInput`<sup>Optional</sup> <a name="SuccessInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsSuccess SuccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `TrueInput`<sup>Optional</sup> <a name="TrueInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsTrue TrueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---


### AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsSuccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsOutputsTrue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingElementsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider">ResetAiGatewayDynamicRoutingProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType">ResetLimitType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAiGatewayDynamicRoutingProvider` <a name="ResetAiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider"></a>

```csharp
private void ResetAiGatewayDynamicRoutingProvider()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetLimitType` <a name="ResetLimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType"></a>

```csharp
private void ResetLimitType()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow"></a>

```csharp
private void ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput">AiGatewayDynamicRoutingProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput">LimitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput">WindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">AiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">Conditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">LimitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">Window</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiGatewayDynamicRoutingProviderInput`<sup>Optional</sup> <a name="AiGatewayDynamicRoutingProviderInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput"></a>

```csharp
public string AiGatewayDynamicRoutingProviderInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput"></a>

```csharp
public string ConditionsInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `LimitTypeInput`<sup>Optional</sup> <a name="LimitTypeInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput"></a>

```csharp
public string LimitTypeInput { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput"></a>

```csharp
public double WindowInput { get; }
```

- *Type:* double

---

##### `AiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="AiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```csharp
public string AiGatewayDynamicRoutingProvider { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```csharp
public string Conditions { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```csharp
public string LimitType { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```csharp
public double Window { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayDynamicRoutingElementsProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteDeploymentOutputReference <a name="AiGatewayDynamicRoutingRouteDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a>

---


### AiGatewayDynamicRoutingRouteElementsList <a name="AiGatewayDynamicRoutingRouteElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get"></a>

```csharp
private AiGatewayDynamicRoutingRouteElementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AiGatewayDynamicRoutingRouteElementsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsOutputReference Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsFallback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsFalse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsNext InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false">False</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next">Next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true">True</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference Fallback { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a>

---

##### `False`<sup>Required</sup> <a name="False" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference False { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a>

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference Next { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference Success { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a>

---

##### `True`<sup>Required</sup> <a name="True" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference True { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsOutputsTrue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">AiGatewayDynamicRoutingProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions">Conditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType">LimitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window">Window</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiGatewayDynamicRoutingProvider`<sup>Required</sup> <a name="AiGatewayDynamicRoutingProvider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```csharp
public string AiGatewayDynamicRoutingProvider { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions"></a>

```csharp
public string Conditions { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `LimitType`<sup>Required</sup> <a name="LimitType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType"></a>

```csharp
public string LimitType { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window"></a>

```csharp
public double Window { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteOutputReference <a name="AiGatewayDynamicRoutingRouteOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag">AccountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version">Version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag"></a>

```csharp
public string AccountTag { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment"></a>

```csharp
public AiGatewayDynamicRoutingRouteDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a>

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements"></a>

```csharp
public AiGatewayDynamicRoutingRouteElementsList Elements { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version"></a>

```csharp
public AiGatewayDynamicRoutingRouteVersionOutputReference Version { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a>

---


### AiGatewayDynamicRoutingRouteVersionOutputReference <a name="AiGatewayDynamicRoutingRouteVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingRouteVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid">IsValid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid"></a>

```csharp
public IResolvable IsValid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingRouteVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a>

---


### AiGatewayDynamicRoutingVersionOutputReference <a name="AiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AiGatewayDynamicRoutingVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid">IsValid</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```csharp
public IResolvable IsValid { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```csharp
public AiGatewayDynamicRoutingVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a>

---



