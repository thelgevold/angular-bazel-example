
import { Cmp4055Component } from './cmp';
describe('Cmp4055Component', () => {
  it('should add', () => {
    expect(new Cmp4055Component().add4055(1)).toBe(4056);
  });
});