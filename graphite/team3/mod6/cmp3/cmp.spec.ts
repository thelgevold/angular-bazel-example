
import { Cmp6363Component } from './cmp';
describe('Cmp6363Component', () => {
  it('should add', () => {
    expect(new Cmp6363Component().add6363(1)).toBe(6364);
  });
});