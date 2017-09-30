
import { Cmp6591Component } from './cmp';
describe('Cmp6591Component', () => {
  it('should add', () => {
    expect(new Cmp6591Component().add6591(1)).toBe(6592);
  });
});