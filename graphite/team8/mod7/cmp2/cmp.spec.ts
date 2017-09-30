
import { Cmp6872Component } from './cmp';
describe('Cmp6872Component', () => {
  it('should add', () => {
    expect(new Cmp6872Component().add6872(1)).toBe(6873);
  });
});