
import { Cmp8708Component } from './cmp';
describe('Cmp8708Component', () => {
  it('should add', () => {
    expect(new Cmp8708Component().add8708(1)).toBe(8709);
  });
});