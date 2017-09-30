
import { Cmp8569Component } from './cmp';
describe('Cmp8569Component', () => {
  it('should add', () => {
    expect(new Cmp8569Component().add8569(1)).toBe(8570);
  });
});