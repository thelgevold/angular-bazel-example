
import { Cmp6443Component } from './cmp';
describe('Cmp6443Component', () => {
  it('should add', () => {
    expect(new Cmp6443Component().add6443(1)).toBe(6444);
  });
});