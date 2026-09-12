# `zeroTrustResourceLibraryApplication` Submodule <a name="`zeroTrustResourceLibraryApplication` Submodule" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustResourceLibraryApplication <a name="ZeroTrustResourceLibraryApplication" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application cloudflare_zero_trust_resource_library_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustResourceLibraryApplication(Construct Scope, string Id, ZeroTrustResourceLibraryApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig">ZeroTrustResourceLibraryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames">ResetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets">ResetIpSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols">ResetPortProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains">ResetSupportDomains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHostnames` <a name="ResetHostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetHostnames"></a>

```csharp
private void ResetHostnames()
```

##### `ResetIpSubnets` <a name="ResetIpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetIpSubnets"></a>

```csharp
private void ResetIpSubnets()
```

##### `ResetPortProtocols` <a name="ResetPortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetPortProtocols"></a>

```csharp
private void ResetPortProtocols()
```

##### `ResetSupportDomains` <a name="ResetSupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.resetSupportDomains"></a>

```csharp
private void ResetSupportDomains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustResourceLibraryApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustResourceLibraryApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustResourceLibraryApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustResourceLibraryApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustResourceLibraryApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustResourceLibraryApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustResourceLibraryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustResourceLibraryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore">ApplicationConfidenceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition">ApplicationScoreComposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource">ApplicationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription">ApplicationTypeDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore">GenAiScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported">Supported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput">CategoryIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput">HostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput">HumanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput">IpSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput">PortProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput">SupportDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId">CategoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId">HumanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets">IpSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols">PortProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains">SupportDomains</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationConfidenceScore`<sup>Required</sup> <a name="ApplicationConfidenceScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationConfidenceScore"></a>

```csharp
public double ApplicationConfidenceScore { get; }
```

- *Type:* double

---

##### `ApplicationScoreComposition`<sup>Required</sup> <a name="ApplicationScoreComposition" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationScoreComposition"></a>

```csharp
public string ApplicationScoreComposition { get; }
```

- *Type:* string

---

##### `ApplicationSource`<sup>Required</sup> <a name="ApplicationSource" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationSource"></a>

```csharp
public string ApplicationSource { get; }
```

- *Type:* string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `ApplicationTypeDescription`<sup>Required</sup> <a name="ApplicationTypeDescription" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.applicationTypeDescription"></a>

```csharp
public string ApplicationTypeDescription { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GenAiScore`<sup>Required</sup> <a name="GenAiScore" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.genAiScore"></a>

```csharp
public double GenAiScore { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Supported`<sup>Required</sup> <a name="Supported" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supported"></a>

```csharp
public string[] Supported { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CategoryIdInput`<sup>Optional</sup> <a name="CategoryIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryIdInput"></a>

```csharp
public double CategoryIdInput { get; }
```

- *Type:* double

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnamesInput"></a>

```csharp
public string[] HostnamesInput { get; }
```

- *Type:* string[]

---

##### `HumanIdInput`<sup>Optional</sup> <a name="HumanIdInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanIdInput"></a>

```csharp
public string HumanIdInput { get; }
```

- *Type:* string

---

##### `IpSubnetsInput`<sup>Optional</sup> <a name="IpSubnetsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnetsInput"></a>

```csharp
public string[] IpSubnetsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortProtocolsInput`<sup>Optional</sup> <a name="PortProtocolsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocolsInput"></a>

```csharp
public string[] PortProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SupportDomainsInput`<sup>Optional</sup> <a name="SupportDomainsInput" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomainsInput"></a>

```csharp
public string[] SupportDomainsInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.categoryId"></a>

```csharp
public double CategoryId { get; }
```

- *Type:* double

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.humanId"></a>

```csharp
public string HumanId { get; }
```

- *Type:* string

---

##### `IpSubnets`<sup>Required</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.ipSubnets"></a>

```csharp
public string[] IpSubnets { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortProtocols`<sup>Required</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.portProtocols"></a>

```csharp
public string[] PortProtocols { get; }
```

- *Type:* string[]

---

##### `SupportDomains`<sup>Required</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.supportDomains"></a>

```csharp
public string[] SupportDomains { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustResourceLibraryApplicationConfig <a name="ZeroTrustResourceLibraryApplicationConfig" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustResourceLibraryApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double CategoryId,
    string HumanId,
    string Name,
    string[] Hostnames = null,
    string[] IpSubnets = null,
    string[] PortProtocols = null,
    string[] SupportDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId">CategoryId</a></code> | <code>double</code> | Returns the category ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId">HumanId</a></code> | <code>string</code> | Returns the human readable ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name">Name</a></code> | <code>string</code> | Returns the application name. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames">Hostnames</a></code> | <code>string[]</code> | Hostnames matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets">IpSubnets</a></code> | <code>string[]</code> | IP subnets matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols">PortProtocols</a></code> | <code>string[]</code> | Port and protocol pairs matched by the application. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains">SupportDomains</a></code> | <code>string[]</code> | Support domains matched by the application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#account_id ZeroTrustResourceLibraryApplication#account_id}.

---

##### `CategoryId`<sup>Required</sup> <a name="CategoryId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.categoryId"></a>

```csharp
public double CategoryId { get; set; }
```

- *Type:* double

Returns the category ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#category_id ZeroTrustResourceLibraryApplication#category_id}

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.humanId"></a>

```csharp
public string HumanId { get; set; }
```

- *Type:* string

Returns the human readable ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#human_id ZeroTrustResourceLibraryApplication#human_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Returns the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#name ZeroTrustResourceLibraryApplication#name}

---

##### `Hostnames`<sup>Optional</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.hostnames"></a>

```csharp
public string[] Hostnames { get; set; }
```

- *Type:* string[]

Hostnames matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#hostnames ZeroTrustResourceLibraryApplication#hostnames}

---

##### `IpSubnets`<sup>Optional</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.ipSubnets"></a>

```csharp
public string[] IpSubnets { get; set; }
```

- *Type:* string[]

IP subnets matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#ip_subnets ZeroTrustResourceLibraryApplication#ip_subnets}

---

##### `PortProtocols`<sup>Optional</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.portProtocols"></a>

```csharp
public string[] PortProtocols { get; set; }
```

- *Type:* string[]

Port and protocol pairs matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#port_protocols ZeroTrustResourceLibraryApplication#port_protocols}

---

##### `SupportDomains`<sup>Optional</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.zeroTrustResourceLibraryApplication.ZeroTrustResourceLibraryApplicationConfig.property.supportDomains"></a>

```csharp
public string[] SupportDomains { get; set; }
```

- *Type:* string[]

Support domains matched by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/zero_trust_resource_library_application#support_domains ZeroTrustResourceLibraryApplication#support_domains}

---



