
import { Cmp8885Component } from './cmp';
describe('Cmp8885Component', () => {
  it('should add', () => {
    expect(new Cmp8885Component().add8885(1)).toBe(8886);
  });
});