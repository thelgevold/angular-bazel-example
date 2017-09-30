
import { Cmp6599Component } from './cmp';
describe('Cmp6599Component', () => {
  it('should add', () => {
    expect(new Cmp6599Component().add6599(1)).toBe(6600);
  });
});