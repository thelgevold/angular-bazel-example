
import { Cmp4010Component } from './cmp';
describe('Cmp4010Component', () => {
  it('should add', () => {
    expect(new Cmp4010Component().add4010(1)).toBe(4011);
  });
});