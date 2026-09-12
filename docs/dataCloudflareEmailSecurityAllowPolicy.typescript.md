# `dataCloudflareEmailSecurityAllowPolicy` Submodule <a name="`dataCloudflareEmailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityAllowPolicy <a name="DataCloudflareEmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy(scope: Construct, id: string, config: DataCloudflareEmailSecurityAllowPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig">DataCloudflareEmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailSecurityAllowPolicyFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityAllowPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender">isAcceptableSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient">isExemptRecipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient">isRecipient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex">isRegex</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender">isSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof">isSpoof</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender">isTrustedSender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender">verifySender</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityAllowPolicyFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference">DataCloudflareEmailSecurityAllowPolicyFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isRecipient`<sup>Required</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRecipient"></a>

```typescript
public readonly isRecipient: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isRegex"></a>

```typescript
public readonly isRegex: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isSender`<sup>Required</sup> <a name="isSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSender"></a>

```typescript
public readonly isSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isSpoof`<sup>Required</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isSpoof"></a>

```typescript
public readonly isSpoof: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.verifySender"></a>

```typescript
public readonly verifySender: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailSecurityAllowPolicyFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityAllowPolicyConfig <a name="DataCloudflareEmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityAllowPolicyConfig: dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId">policyId</a></code> | <code>string</code> | Allow policy identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#account_id DataCloudflareEmailSecurityAllowPolicy#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityAllowPolicyFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#filter DataCloudflareEmailSecurityAllowPolicy#filter}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Allow policy identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#policy_id DataCloudflareEmailSecurityAllowPolicy#policy_id}

---

### DataCloudflareEmailSecurityAllowPolicyFilter <a name="DataCloudflareEmailSecurityAllowPolicyFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

const dataCloudflareEmailSecurityAllowPolicyFilter: dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction">direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages to the recipient bypass all detections. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies where messages from the sender bypass all detections and link following. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order">order</a></code> | <code>string</code> | Field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType">patternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search">search</a></code> | <code>string</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#direction DataCloudflareEmailSecurityAllowPolicy#direction}

---

##### `isAcceptableSender`<sup>Optional</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_acceptable_sender DataCloudflareEmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Optional</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages to the recipient bypass all detections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_exempt_recipient DataCloudflareEmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `isTrustedSender`<sup>Optional</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies where messages from the sender bypass all detections and link following.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#is_trusted_sender DataCloudflareEmailSecurityAllowPolicy#is_trusted_sender}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#order DataCloudflareEmailSecurityAllowPolicy#order}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern DataCloudflareEmailSecurityAllowPolicy#pattern}.

---

##### `patternType`<sup>Optional</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

Type of pattern matching.

EMAIL: matches a full email address (e.g. `user@example.com`)
- DOMAIN: matches a domain name (e.g. `example.com`)
- IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
- UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#pattern_type DataCloudflareEmailSecurityAllowPolicy#pattern_type}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#search DataCloudflareEmailSecurityAllowPolicy#search}

---

##### `verifySender`<sup>Optional</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Filter to show only policies that enforce DMARC, SPF, or DKIM authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_allow_policy#verify_sender DataCloudflareEmailSecurityAllowPolicy#verify_sender}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityAllowPolicyFilterOutputReference <a name="DataCloudflareEmailSecurityAllowPolicyFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityAllowPolicy } from '@cdktn/provider-cloudflare'

new dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender">resetIsAcceptableSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient">resetIsExemptRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender">resetIsTrustedSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType">resetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender">resetVerifySender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetIsAcceptableSender` <a name="resetIsAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsAcceptableSender"></a>

```typescript
public resetIsAcceptableSender(): void
```

##### `resetIsExemptRecipient` <a name="resetIsExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsExemptRecipient"></a>

```typescript
public resetIsExemptRecipient(): void
```

##### `resetIsTrustedSender` <a name="resetIsTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetIsTrustedSender"></a>

```typescript
public resetIsTrustedSender(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPatternType` <a name="resetPatternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetPatternType"></a>

```typescript
public resetPatternType(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetVerifySender` <a name="resetVerifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.resetVerifySender"></a>

```typescript
public resetVerifySender(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput">isAcceptableSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput">isExemptRecipientInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput">isTrustedSenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput">patternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput">verifySenderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender">isAcceptableSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient">isExemptRecipient</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender">isTrustedSender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType">patternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender">verifySender</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `isAcceptableSenderInput`<sup>Optional</sup> <a name="isAcceptableSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSenderInput"></a>

```typescript
public readonly isAcceptableSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipientInput`<sup>Optional</sup> <a name="isExemptRecipientInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipientInput"></a>

```typescript
public readonly isExemptRecipientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSenderInput`<sup>Optional</sup> <a name="isTrustedSenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSenderInput"></a>

```typescript
public readonly isTrustedSenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternTypeInput"></a>

```typescript
public readonly patternTypeInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `verifySenderInput`<sup>Optional</sup> <a name="verifySenderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySenderInput"></a>

```typescript
public readonly verifySenderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isAcceptableSender"></a>

```typescript
public readonly isAcceptableSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isExemptRecipient"></a>

```typescript
public readonly isExemptRecipient: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.isTrustedSender"></a>

```typescript
public readonly isTrustedSender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.patternType"></a>

```typescript
public readonly patternType: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.verifySender"></a>

```typescript
public readonly verifySender: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailSecurityAllowPolicyFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityAllowPolicy.DataCloudflareEmailSecurityAllowPolicyFilter">DataCloudflareEmailSecurityAllowPolicyFilter</a>

---



