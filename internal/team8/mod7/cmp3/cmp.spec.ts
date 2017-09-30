
import { Cmp8873Component } from './cmp';
describe('Cmp8873Component', () => {
  it('should add', () => {
    expect(new Cmp8873Component().add8873(1)).toBe(8874);
  });
});