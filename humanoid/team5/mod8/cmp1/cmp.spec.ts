
import { Cmp7581Component } from './cmp';
describe('Cmp7581Component', () => {
  it('should add', () => {
    expect(new Cmp7581Component().add7581(1)).toBe(7582);
  });
});