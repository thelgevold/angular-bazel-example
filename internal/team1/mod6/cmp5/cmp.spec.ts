
import { Cmp8165Component } from './cmp';
describe('Cmp8165Component', () => {
  it('should add', () => {
    expect(new Cmp8165Component().add8165(1)).toBe(8166);
  });
});