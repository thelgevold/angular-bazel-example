
import { Cmp6569Component } from './cmp';
describe('Cmp6569Component', () => {
  it('should add', () => {
    expect(new Cmp6569Component().add6569(1)).toBe(6570);
  });
});