
import { Cmp6350Component } from './cmp';
describe('Cmp6350Component', () => {
  it('should add', () => {
    expect(new Cmp6350Component().add6350(1)).toBe(6351);
  });
});