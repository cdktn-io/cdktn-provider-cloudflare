# `dataCloudflareEmailSecurityDomain` Submodule <a name="`dataCloudflareEmailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomain <a name="DataCloudflareEmailSecurityDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomain(Construct Scope, string Id, DataCloudflareEmailSecurityDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig">DataCloudflareEmailSecurityDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig">DataCloudflareEmailSecurityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareEmailSecurityDomainFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId"></a>

```csharp
private void ResetDomainId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter"></a>

```csharp
private void ResetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus">DmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions">DropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed">EmailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider">InboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions">IpRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops">LookbackHops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId">O365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus">SpfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport">Transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes"></a>

```csharp
public string[] AllowedDeliveryModes { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization"></a>

```csharp
public DataCloudflareEmailSecurityDomainAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DmarcStatus`<sup>Required</sup> <a name="DmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus"></a>

```csharp
public string DmarcStatus { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions"></a>

```csharp
public string[] DropDispositions { get; }
```

- *Type:* string[]

---

##### `EmailsProcessed`<sup>Required</sup> <a name="EmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed"></a>

```csharp
public DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference EmailsProcessed { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter"></a>

```csharp
public DataCloudflareEmailSecurityDomainFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a>

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboxProvider`<sup>Required</sup> <a name="InboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider"></a>

```csharp
public string InboxProvider { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions"></a>

```csharp
public string[] IpRestrictions { get; }
```

- *Type:* string[]

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `LookbackHops`<sup>Required</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops"></a>

```csharp
public double LookbackHops { get; }
```

- *Type:* double

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `O365TenantId`<sup>Required</sup> <a name="O365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId"></a>

```csharp
public string O365TenantId { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequireTlsInbound`<sup>Required</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound"></a>

```csharp
public IResolvable RequireTlsInbound { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequireTlsOutbound`<sup>Required</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound"></a>

```csharp
public IResolvable RequireTlsOutbound { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SpfStatus`<sup>Required</sup> <a name="SpfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus"></a>

```csharp
public string SpfStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput"></a>

```csharp
public IResolvable|DataCloudflareEmailSecurityDomainFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainAuthorization <a name="DataCloudflareEmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainAuthorization {

};
```


### DataCloudflareEmailSecurityDomainConfig <a name="DataCloudflareEmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string DomainId = null,
    DataCloudflareEmailSecurityDomainFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId">DomainId</a></code> | <code>string</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter"></a>

```csharp
public DataCloudflareEmailSecurityDomainFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

### DataCloudflareEmailSecurityDomainEmailsProcessed <a name="DataCloudflareEmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainEmailsProcessed {

};
```


### DataCloudflareEmailSecurityDomainFilter <a name="DataCloudflareEmailSecurityDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainFilter {
    string ActiveDeliveryMode = null,
    string AllowedDeliveryMode = null,
    string Direction = null,
    string[] Domain = null,
    string IntegrationId = null,
    string Order = null,
    string Search = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>string</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>string</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction">Direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain">Domain</a></code> | <code>string[]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId">IntegrationId</a></code> | <code>string</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order">Order</a></code> | <code>string</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search">Search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status">Status</a></code> | <code>string</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `ActiveDeliveryMode`<sup>Optional</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode"></a>

```csharp
public string ActiveDeliveryMode { get; set; }
```

- *Type:* string

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}

---

##### `AllowedDeliveryMode`<sup>Optional</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode"></a>

```csharp
public string AllowedDeliveryMode { get; set; }
```

- *Type:* string

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain"></a>

```csharp
public string[] Domain { get; set; }
```

- *Type:* string[]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized">Authorized</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```csharp
public IResolvable Authorized { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityDomainAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a>

---


### DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">TotalEmailsProcessed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">TotalEmailsProcessedPrevious</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TotalEmailsProcessed`<sup>Required</sup> <a name="TotalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```csharp
public double TotalEmailsProcessed { get; }
```

- *Type:* double

---

##### `TotalEmailsProcessedPrevious`<sup>Required</sup> <a name="TotalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```csharp
public double TotalEmailsProcessedPrevious { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityDomainEmailsProcessed InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainFilterOutputReference <a name="DataCloudflareEmailSecurityDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode">ResetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode">ResetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDeliveryMode` <a name="ResetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode"></a>

```csharp
private void ResetActiveDeliveryMode()
```

##### `ResetAllowedDeliveryMode` <a name="ResetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode"></a>

```csharp
private void ResetAllowedDeliveryMode()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput">ActiveDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput">AllowedDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput">DomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain">Domain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDeliveryModeInput`<sup>Optional</sup> <a name="ActiveDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput"></a>

```csharp
public string ActiveDeliveryModeInput { get; }
```

- *Type:* string

---

##### `AllowedDeliveryModeInput`<sup>Optional</sup> <a name="AllowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput"></a>

```csharp
public string AllowedDeliveryModeInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput"></a>

```csharp
public string[] DomainInput { get; }
```

- *Type:* string[]

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ActiveDeliveryMode`<sup>Required</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode"></a>

```csharp
public string ActiveDeliveryMode { get; }
```

- *Type:* string

---

##### `AllowedDeliveryMode`<sup>Required</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode"></a>

```csharp
public string AllowedDeliveryMode { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain"></a>

```csharp
public string[] Domain { get; }
```

- *Type:* string[]

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataCloudflareEmailSecurityDomainFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---



