
import { Cmp6640Component } from './cmp';
describe('Cmp6640Component', () => {
  it('should add', () => {
    expect(new Cmp6640Component().add6640(1)).toBe(6641);
  });
});