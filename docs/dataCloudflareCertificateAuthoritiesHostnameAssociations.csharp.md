# `dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule <a name="`dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociations <a name="DataCloudflareCertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCertificateAuthoritiesHostnameAssociations(Construct Scope, string Id, DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">ResetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMtlsCertificateId` <a name="ResetMtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```csharp
private void ResetMtlsCertificateId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCertificateAuthoritiesHostnameAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCertificateAuthoritiesHostnameAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCertificateAuthoritiesHostnameAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareCertificateAuthoritiesHostnameAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCertificateAuthoritiesHostnameAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">MtlsCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MtlsCertificateIdInput`<sup>Optional</sup> <a name="MtlsCertificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```csharp
public string MtlsCertificateIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `MtlsCertificateId`<sup>Required</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig <a name="DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MtlsCertificateId = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MtlsCertificateId`<sup>Optional</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; set; }
```

- *Type:* string

The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}

---



