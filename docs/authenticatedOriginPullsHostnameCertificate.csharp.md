# `authenticatedOriginPullsHostnameCertificate` Submodule <a name="`authenticatedOriginPullsHostnameCertificate` Submodule" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsHostnameCertificate <a name="AuthenticatedOriginPullsHostnameCertificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AuthenticatedOriginPullsHostnameCertificate(Construct Scope, string Id, AuthenticatedOriginPullsHostnameCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AuthenticatedOriginPullsHostnameCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AuthenticatedOriginPullsHostnameCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AuthenticatedOriginPullsHostnameCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

AuthenticatedOriginPullsHostnameCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticatedOriginPullsHostnameCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticatedOriginPullsHostnameCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPullsHostnameCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn">UploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn"></a>

```csharp
public string UploadedOn { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsHostnameCertificateConfig <a name="AuthenticatedOriginPullsHostnameCertificateConfig" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new AuthenticatedOriginPullsHostnameCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Certificate,
    string PrivateKey,
    string ZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate">Certificate</a></code> | <code>string</code> | The hostname certificate. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | The hostname certificate's private key. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

The hostname certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/authenticated_origin_pulls_hostname_certificate#certificate AuthenticatedOriginPullsHostnameCertificate#certificate}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

The hostname certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/authenticated_origin_pulls_hostname_certificate#private_key AuthenticatedOriginPullsHostnameCertificate#private_key}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/authenticated_origin_pulls_hostname_certificate#zone_id AuthenticatedOriginPullsHostnameCertificate#zone_id}

---



