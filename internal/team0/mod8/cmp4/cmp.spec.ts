
import { Cmp8084Component } from './cmp';
describe('Cmp8084Component', () => {
  it('should add', () => {
    expect(new Cmp8084Component().add8084(1)).toBe(8085);
  });
});