
import { Cmp4023Component } from './cmp';
describe('Cmp4023Component', () => {
  it('should add', () => {
    expect(new Cmp4023Component().add4023(1)).toBe(4024);
  });
});