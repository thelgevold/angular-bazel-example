
import { Cmp7099Component } from './cmp';
describe('Cmp7099Component', () => {
  it('should add', () => {
    expect(new Cmp7099Component().add7099(1)).toBe(7100);
  });
});