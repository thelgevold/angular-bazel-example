
import { Cmp7121Component } from './cmp';
describe('Cmp7121Component', () => {
  it('should add', () => {
    expect(new Cmp7121Component().add7121(1)).toBe(7122);
  });
});