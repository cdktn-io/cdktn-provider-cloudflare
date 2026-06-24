# `certificateAuthoritiesHostnameAssociations` Submodule <a name="`certificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateAuthoritiesHostnameAssociations <a name="CertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new CertificateAuthoritiesHostnameAssociations(Construct Scope, string Id, CertificateAuthoritiesHostnameAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig">CertificateAuthoritiesHostnameAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig">CertificateAuthoritiesHostnameAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames">ResetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">ResetMtlsCertificateId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHostnames` <a name="ResetHostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames"></a>

```csharp
private void ResetHostnames()
```

##### `ResetMtlsCertificateId` <a name="ResetMtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```csharp
private void ResetMtlsCertificateId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

CertificateAuthoritiesHostnameAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

CertificateAuthoritiesHostnameAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

CertificateAuthoritiesHostnameAssociations.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

CertificateAuthoritiesHostnameAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput">HostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">MtlsCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput"></a>

```csharp
public string[] HostnamesInput { get; }
```

- *Type:* string[]

---

##### `MtlsCertificateIdInput`<sup>Optional</sup> <a name="MtlsCertificateIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```csharp
public string MtlsCertificateIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `MtlsCertificateId`<sup>Required</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateAuthoritiesHostnameAssociationsConfig <a name="CertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new CertificateAuthoritiesHostnameAssociationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId,
    string[] Hostnames = null,
    string MtlsCertificateId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames">Hostnames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}

---

##### `Hostnames`<sup>Optional</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames"></a>

```csharp
public string[] Hostnames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}.

---

##### `MtlsCertificateId`<sup>Optional</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; set; }
```

- *Type:* string

The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---



