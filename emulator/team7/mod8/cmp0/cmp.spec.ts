
import { Cmp4780Component } from './cmp';
describe('Cmp4780Component', () => {
  it('should add', () => {
    expect(new Cmp4780Component().add4780(1)).toBe(4781);
  });
});