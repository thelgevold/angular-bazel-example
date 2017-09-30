
import { Cmp6030Component } from './cmp';
describe('Cmp6030Component', () => {
  it('should add', () => {
    expect(new Cmp6030Component().add6030(1)).toBe(6031);
  });
});