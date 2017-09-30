
import { Cmp6055Component } from './cmp';
describe('Cmp6055Component', () => {
  it('should add', () => {
    expect(new Cmp6055Component().add6055(1)).toBe(6056);
  });
});