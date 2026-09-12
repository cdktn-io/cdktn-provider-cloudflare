# `dataCloudflareEmailSecurityDomains` Submodule <a name="`dataCloudflareEmailSecurityDomains` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomains <a name="DataCloudflareEmailSecurityDomains" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains cloudflare_email_security_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomains(Construct Scope, string Id, DataCloudflareEmailSecurityDomainsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig">DataCloudflareEmailSecurityDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode">ResetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode">ResetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetActiveDeliveryMode` <a name="ResetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetActiveDeliveryMode"></a>

```csharp
private void ResetActiveDeliveryMode()
```

##### `ResetAllowedDeliveryMode` <a name="ResetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetAllowedDeliveryMode"></a>

```csharp
private void ResetAllowedDeliveryMode()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomains.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomains.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomains.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareEmailSecurityDomains.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomains resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityDomains to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput">ActiveDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput">AllowedDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput">DomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain">Domain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.result"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList">DataCloudflareEmailSecurityDomainsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActiveDeliveryModeInput`<sup>Optional</sup> <a name="ActiveDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryModeInput"></a>

```csharp
public string ActiveDeliveryModeInput { get; }
```

- *Type:* string

---

##### `AllowedDeliveryModeInput`<sup>Optional</sup> <a name="AllowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryModeInput"></a>

```csharp
public string AllowedDeliveryModeInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domainInput"></a>

```csharp
public string[] DomainInput { get; }
```

- *Type:* string[]

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActiveDeliveryMode`<sup>Required</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.activeDeliveryMode"></a>

```csharp
public string ActiveDeliveryMode { get; }
```

- *Type:* string

---

##### `AllowedDeliveryMode`<sup>Required</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.allowedDeliveryMode"></a>

```csharp
public string AllowedDeliveryMode { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.domain"></a>

```csharp
public string[] Domain { get; }
```

- *Type:* string[]

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomains.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainsConfig <a name="DataCloudflareEmailSecurityDomainsConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string ActiveDeliveryMode = null,
    string AllowedDeliveryMode = null,
    string Direction = null,
    string[] Domain = null,
    string IntegrationId = null,
    double MaxItems = null,
    string Order = null,
    string Search = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode">ActiveDeliveryMode</a></code> | <code>string</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode">AllowedDeliveryMode</a></code> | <code>string</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction">Direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain">Domain</a></code> | <code>string[]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order">Order</a></code> | <code>string</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search">Search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status">Status</a></code> | <code>string</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#account_id DataCloudflareEmailSecurityDomains#account_id}

---

##### `ActiveDeliveryMode`<sup>Optional</sup> <a name="ActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.activeDeliveryMode"></a>

```csharp
public string ActiveDeliveryMode { get; set; }
```

- *Type:* string

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#active_delivery_mode DataCloudflareEmailSecurityDomains#active_delivery_mode}

---

##### `AllowedDeliveryMode`<sup>Optional</sup> <a name="AllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.allowedDeliveryMode"></a>

```csharp
public string AllowedDeliveryMode { get; set; }
```

- *Type:* string

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#allowed_delivery_mode DataCloudflareEmailSecurityDomains#allowed_delivery_mode}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#direction DataCloudflareEmailSecurityDomains#direction}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.domain"></a>

```csharp
public string[] Domain { get; set; }
```

- *Type:* string[]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#domain DataCloudflareEmailSecurityDomains#domain}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#integration_id DataCloudflareEmailSecurityDomains#integration_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#max_items DataCloudflareEmailSecurityDomains#max_items}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#order DataCloudflareEmailSecurityDomains#order}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#search DataCloudflareEmailSecurityDomains#search}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domains#status DataCloudflareEmailSecurityDomains#status}

---

### DataCloudflareEmailSecurityDomainsResult <a name="DataCloudflareEmailSecurityDomainsResult" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResult {

};
```


### DataCloudflareEmailSecurityDomainsResultAuthorization <a name="DataCloudflareEmailSecurityDomainsResultAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultAuthorization {

};
```


### DataCloudflareEmailSecurityDomainsResultEmailsProcessed <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultEmailsProcessed {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized">Authorized</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.authorized"></a>

```csharp
public IResolvable Authorized { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResultAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorization">DataCloudflareEmailSecurityDomainsResultAuthorization</a>

---


### DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed">TotalEmailsProcessed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">TotalEmailsProcessedPrevious</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TotalEmailsProcessed`<sup>Required</sup> <a name="TotalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```csharp
public double TotalEmailsProcessed { get; }
```

- *Type:* double

---

##### `TotalEmailsProcessedPrevious`<sup>Required</sup> <a name="TotalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```csharp
public double TotalEmailsProcessedPrevious { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResultEmailsProcessed InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessed">DataCloudflareEmailSecurityDomainsResultEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainsResultList <a name="DataCloudflareEmailSecurityDomainsResultList" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get"></a>

```csharp
private DataCloudflareEmailSecurityDomainsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareEmailSecurityDomainsResultOutputReference <a name="DataCloudflareEmailSecurityDomainsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareEmailSecurityDomainsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus">DmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions">DropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed">EmailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider">InboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions">IpRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops">LookbackHops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId">O365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus">SpfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport">Transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.allowedDeliveryModes"></a>

```csharp
public string[] AllowedDeliveryModes { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.authorization"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference">DataCloudflareEmailSecurityDomainsResultAuthorizationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DmarcStatus`<sup>Required</sup> <a name="DmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dmarcStatus"></a>

```csharp
public string DmarcStatus { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.dropDispositions"></a>

```csharp
public string[] DropDispositions { get; }
```

- *Type:* string[]

---

##### `EmailsProcessed`<sup>Required</sup> <a name="EmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.emailsProcessed"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference EmailsProcessed { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainsResultEmailsProcessedOutputReference</a>

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboxProvider`<sup>Required</sup> <a name="InboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.inboxProvider"></a>

```csharp
public string InboxProvider { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.ipRestrictions"></a>

```csharp
public string[] IpRestrictions { get; }
```

- *Type:* string[]

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `LookbackHops`<sup>Required</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.lookbackHops"></a>

```csharp
public double LookbackHops { get; }
```

- *Type:* double

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `O365TenantId`<sup>Required</sup> <a name="O365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.o365TenantId"></a>

```csharp
public string O365TenantId { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequireTlsInbound`<sup>Required</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsInbound"></a>

```csharp
public IResolvable RequireTlsInbound { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequireTlsOutbound`<sup>Required</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.requireTlsOutbound"></a>

```csharp
public IResolvable RequireTlsOutbound { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SpfStatus`<sup>Required</sup> <a name="SpfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.spfStatus"></a>

```csharp
public string SpfStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareEmailSecurityDomainsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomains.DataCloudflareEmailSecurityDomainsResult">DataCloudflareEmailSecurityDomainsResult</a>

---



