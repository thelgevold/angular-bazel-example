
import { Cmp6390Component } from './cmp';
describe('Cmp6390Component', () => {
  it('should add', () => {
    expect(new Cmp6390Component().add6390(1)).toBe(6391);
  });
});