# `dataCloudflareAuthenticatedOriginPullsHostnameCertificates` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsHostnameCertificates` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificates <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificates" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificates cloudflare_authenticated_origin_pulls_hostname_certificates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAuthenticatedOriginPullsHostnameCertificates(Construct Scope, string Id, DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificates resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAuthenticatedOriginPullsHostnameCertificates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAuthenticatedOriginPullsHostnameCertificates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAuthenticatedOriginPullsHostnameCertificates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareAuthenticatedOriginPullsHostnameCertificates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificates resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.result"></a>

```csharp
public DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificates#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificates#zone_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificates#max_items DataCloudflareAuthenticatedOriginPullsHostnameCertificates#max_items}

---

### DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.get"></a>

```csharp
private DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.uploadedOn">UploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.uploadedOn"></a>

```csharp
public string UploadedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificates.DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult">DataCloudflareAuthenticatedOriginPullsHostnameCertificatesResult</a>

---



