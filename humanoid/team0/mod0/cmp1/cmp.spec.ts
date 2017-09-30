
import { Cmp7001Component } from './cmp';
describe('Cmp7001Component', () => {
  it('should add', () => {
    expect(new Cmp7001Component().add7001(1)).toBe(7002);
  });
});