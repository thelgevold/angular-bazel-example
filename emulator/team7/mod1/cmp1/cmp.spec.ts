
import { Cmp4711Component } from './cmp';
describe('Cmp4711Component', () => {
  it('should add', () => {
    expect(new Cmp4711Component().add4711(1)).toBe(4712);
  });
});