# `dataCloudflareEmailSecurityDomain` Submodule <a name="`dataCloudflareEmailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomain <a name="DataCloudflareEmailSecurityDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain(scope: Construct, id: string, config: DataCloudflareEmailSecurityDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig">DataCloudflareEmailSecurityDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig">DataCloudflareEmailSecurityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailSecurityDomainFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus">dmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions">dropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider">inboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions">ipRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops">lookbackHops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId">o365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound">requireTlsInbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus">spfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport">transport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes"></a>

```typescript
public readonly allowedDeliveryModes: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization"></a>

```typescript
public readonly authorization: DataCloudflareEmailSecurityDomainAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus"></a>

```typescript
public readonly dmarcStatus: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions"></a>

```typescript
public readonly dropDispositions: string[];
```

- *Type:* string[]

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed"></a>

```typescript
public readonly emailsProcessed: DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityDomainFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider"></a>

```typescript
public readonly inboxProvider: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions"></a>

```typescript
public readonly ipRestrictions: string[];
```

- *Type:* string[]

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops"></a>

```typescript
public readonly lookbackHops: number;
```

- *Type:* number

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId"></a>

```typescript
public readonly o365TenantId: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound"></a>

```typescript
public readonly requireTlsInbound: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound"></a>

```typescript
public readonly requireTlsOutbound: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus"></a>

```typescript
public readonly spfStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport"></a>

```typescript
public readonly transport: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailSecurityDomainFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainAuthorization <a name="DataCloudflareEmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainAuthorization: dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization = { ... }
```


### DataCloudflareEmailSecurityDomainConfig <a name="DataCloudflareEmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainConfig: dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId">domainId</a></code> | <code>string</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityDomainFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

### DataCloudflareEmailSecurityDomainEmailsProcessed <a name="DataCloudflareEmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainEmailsProcessed: dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed = { ... }
```


### DataCloudflareEmailSecurityDomainFilter <a name="DataCloudflareEmailSecurityDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityDomainFilter: dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>string</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>string</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction">direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain">domain</a></code> | <code>string[]</code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId">integrationId</a></code> | <code>string</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order">order</a></code> | <code>string</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search">search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status">status</a></code> | <code>string</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `activeDeliveryMode`<sup>Optional</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode"></a>

```typescript
public readonly activeDeliveryMode: string;
```

- *Type:* string

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}

---

##### `allowedDeliveryMode`<sup>Optional</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode"></a>

```typescript
public readonly allowedDeliveryMode: string;
```

- *Type:* string

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain"></a>

```typescript
public readonly domain: string[];
```

- *Type:* string[]

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```typescript
public readonly authorized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityDomainAuthorization;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a>

---


### DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```typescript
public readonly totalEmailsProcessed: number;
```

- *Type:* number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```typescript
public readonly totalEmailsProcessedPrevious: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailSecurityDomainEmailsProcessed;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainFilterOutputReference <a name="DataCloudflareEmailSecurityDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode">resetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode">resetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDeliveryMode` <a name="resetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode"></a>

```typescript
public resetActiveDeliveryMode(): void
```

##### `resetAllowedDeliveryMode` <a name="resetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode"></a>

```typescript
public resetAllowedDeliveryMode(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput">activeDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput">allowedDeliveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput">domainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain">domain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDeliveryModeInput`<sup>Optional</sup> <a name="activeDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput"></a>

```typescript
public readonly activeDeliveryModeInput: string;
```

- *Type:* string

---

##### `allowedDeliveryModeInput`<sup>Optional</sup> <a name="allowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput"></a>

```typescript
public readonly allowedDeliveryModeInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string[];
```

- *Type:* string[]

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `activeDeliveryMode`<sup>Required</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode"></a>

```typescript
public readonly activeDeliveryMode: string;
```

- *Type:* string

---

##### `allowedDeliveryMode`<sup>Required</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode"></a>

```typescript
public readonly allowedDeliveryMode: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain"></a>

```typescript
public readonly domain: string[];
```

- *Type:* string[]

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailSecurityDomainFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---



