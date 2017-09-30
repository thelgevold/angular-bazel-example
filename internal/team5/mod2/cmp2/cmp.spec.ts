
import { Cmp8522Component } from './cmp';
describe('Cmp8522Component', () => {
  it('should add', () => {
    expect(new Cmp8522Component().add8522(1)).toBe(8523);
  });
});