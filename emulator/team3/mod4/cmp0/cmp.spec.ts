
import { Cmp4340Component } from './cmp';
describe('Cmp4340Component', () => {
  it('should add', () => {
    expect(new Cmp4340Component().add4340(1)).toBe(4341);
  });
});