
import { Cmp8070Component } from './cmp';
describe('Cmp8070Component', () => {
  it('should add', () => {
    expect(new Cmp8070Component().add8070(1)).toBe(8071);
  });
});