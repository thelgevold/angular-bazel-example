
import { Cmp7037Component } from './cmp';
describe('Cmp7037Component', () => {
  it('should add', () => {
    expect(new Cmp7037Component().add7037(1)).toBe(7038);
  });
});