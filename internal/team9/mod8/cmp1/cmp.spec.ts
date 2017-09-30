
import { Cmp8981Component } from './cmp';
describe('Cmp8981Component', () => {
  it('should add', () => {
    expect(new Cmp8981Component().add8981(1)).toBe(8982);
  });
});